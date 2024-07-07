// Import Thirdweb SDK modules
const { createThirdwebClient, getContract } = require("thirdweb");
const { defineChain } = require("thirdweb/chains");

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({ 
    clientId: "f96d56cdb9c35ae09e7ffad2a5fe01ba"
});

// connect to your contract
const contract = getContract({ 
    client, 
    chain: defineChain(80084), 
    address: "0x4Afb30c608f183CDB322b168482F50bAAD21dE67"
});

// Example usage
async function main() {
    try {
        // Example: Call a function from your contract
        const result = await contract.someFunction();
        console.log("Function result:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Run the main function
main();
