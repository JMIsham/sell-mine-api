import fs from 'fs';

async function getAdsLocal() {
    try {
        const data = await fs.promises.readFile('./ads.json', 'utf8');
        const ads = JSON.parse(data);
        return ads;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
  
async function getAdByIdLocal(id) {
    try {
        const data = await fs.promises.readFile('./ads.json', 'utf8');
        const ads = JSON.parse(data);
        const ad = ads.find(ad => ad.id == id);
        return ad;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
  
async function createAdLocal(ad) {
    try {
        const data = await fs.promises.readFile('./ads.json', 'utf8');
        const ads = JSON.parse(data);
        const newAd = { ...ad, id: ads.length + 1 };
        ads.push(newAd);
        await fs.promises.writeFile('./ads.json', JSON.stringify(ads), 'utf8');
        return newAd;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function updateAdLocal(id, ad) {
    try {
        const data = await fs.promises.readFile('./ads.json', 'utf8');
        const ads = JSON.parse(data);
        const index = ads.findIndex(ad => ad.id == id);
        if (index !== -1) {
            ads[index] = { ...ad, id };
            await fs.promises.writeFile('./ads.json', JSON.stringify(ads), 'utf8');
            return ads[index];
        } else {
            throw new Error('Ad not found');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
  
  
async function deleteAdLocal(id) {
    try {
        const data = await fs.promises.readFile('./ads.json', 'utf8');
        const ads = JSON.parse(data);
        const index = ads.findIndex(ad => ad.id == id);
        if (index !== -1) {
            ads.splice(index, 1);
            await fs.promises.writeFile('./ads.json', JSON.stringify(ads), 'utf8');
        } else {
            throw new Error('Ad not found');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}
  export  {
      getAdsLocal,
      getAdByIdLocal,
      createAdLocal,
      updateAdLocal,
      deleteAdLocal,
      };