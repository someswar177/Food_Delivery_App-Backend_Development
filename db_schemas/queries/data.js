const insertOrganizationData = `
INSERT INTO organization (name) VALUES
('Organization A'),
('Organization B'),
('Organization C'),
('Food Express'),
('Quick Bites'),
('Tasty Treats'),
('Green Grocers'),
('Snack Stop'),
('Meat Masters'),
('Pantry Plus');
`

const insertItemData = `
INSERT INTO item (type, description) VALUES
('perishable', 'Fresh produce'),
('non-perishable', 'Canned goods'),
('perishable', 'Fresh fruits'),
('non-perishable', 'Snacks'),
('perishable', 'Dairy products'),
('non-perishable', 'Cereals'),
('perishable', 'Fresh vegetables'),
('non-perishable', 'Packaged snacks'),
('perishable', 'Meat and poultry'),
('non-perishable', 'Canned food');
`

const insertPricingData = `
INSERT INTO pricing (organization_id, item_id, zone, base_distance_in_km, km_price, fix_price) VALUES
(1, 1, 'central', 5, 2, 10),
(1, 2, 'central', 5, 1, 10),
(2, 1, 'central', 5, 2, 15),
(4, 5, 'north', 5, 2, 12),
(4, 6, 'south', 5, 1, 10),
(4, 7, 'north', 5, 2, 15),
(6, 5, 'south', 5, 2, 12),
(6, 6, 'north', 5, 1, 10),
(6, 7, 'south', 5, 2, 15),
(6, 8, 'south', 5, 2, 12),
(6, 7, 'north', 5, 2, 15),
(6, 8, 'north', 5, 2, 12);
`
module.exports = {insertOrganizationData,insertItemData,insertPricingData};
