-- Insert dummy data for users
INSERT INTO users (name, email) VALUES
    ('John Doe', 'john.doe@example.com'),
    ('Jane Smith', 'jane.smith@example.com'),
    ('Mike Johnson', 'mike.johnson@example.com');

-- Insert dummy data for ads
INSERT INTO ads (title, price, description, image, created_at, user_id) VALUES
    ('Car for Sale', 5000, 'Selling a used car in good condition.', 'car.jpg', NOW(), 1),
    ('Apartment for Rent', 1000, 'Spacious apartment available for rent.', 'apartment.jpg', NOW(), 2),
    ('Furniture for Sale', 200, 'Various furniture items for sale.', 'furniture.jpg', NOW(), 3);