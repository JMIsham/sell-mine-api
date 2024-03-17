import getConnection from "./db.service.mjs";

async function getAds() {
  const client = await getConnection();
  try {
    const result = await client.query("SELECT * FROM ads");
    return result.rows;
  } finally {
    client.release();
  }
}

async function getAdById(id) {
  const client = await getConnection();
  try {
    const result = await client.query("SELECT * FROM ads WHERE id = $1", [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function createAd(ad) {
  const client = await getConnection();
  try {
    const result = await client.query(
      "INSERT INTO ads (title, description, price, image, user_id, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [ad.title, ad.description, ad.price, ad.image, ad.user_id]
    );
    return result.rows[0];
  } catch(error) {
    console.log(error);
    throw error
  }finally {
    client.release();
  }
}

async function updateAd(id, ad) {
  const client = await getConnection();
  try {
    const result = await client.query(
      "UPDATE ads SET title = $1, description = $2, price = $3, image = $4 WHERE id = $5 RETURNING *",
      [ad.title, ad.description, ad.price, ad.image, id]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function deleteAd(id) {
    const client = await getConnection();
    try {
        await client.query("DELETE FROM ads WHERE id = $1", [id]);
    } finally {
        client.release();
    }
}

export  {
    getAds,
    getAdById,
    createAd,
    updateAd,
    deleteAd,
    };