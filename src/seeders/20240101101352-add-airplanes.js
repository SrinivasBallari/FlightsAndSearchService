"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "airplanes",
            [
                {
                    modelNumber: "Boeing 777",
                    capacity: 340,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A320",
                    capacity: 190,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 747",
                    capacity: 310,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Airbus A330",
                    capacity: 430,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Boeing 737",
                    capacity: 470,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    modelNumber: "Cardiat 933",
                    capacity: 340,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
