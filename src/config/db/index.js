const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            '',
        );
        console.log('Connect DB successfully');
    } catch (error) {
        console.log('🚀 ~ connect ~ error', error);
        console.log('Connect DB error');
    }
}

module.exports = { connect };
