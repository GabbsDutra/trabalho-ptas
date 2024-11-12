const items = ['Item 1', 'Item 2', 'Item 3'];

const getItems = (req, res) => res.json(items);

module.exports = { getItems };
