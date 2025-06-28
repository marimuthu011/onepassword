require("dotenv").config();
const sdk = require("@1password/sdk");

async function main() {
  // Initialize SDK with service account token
  const client = await sdk.createClient({
    auth: process.env.OP_SERVICE_ACCOUNT_TOKEN,
    integrationName: "VaultLister",
    integrationVersion: "v1.0.0",
  });

  // List and print all vaults
  const vaults = await client.vaults.list();
  console.log("🔐 Vaults:");
  vaults.forEach(v => {
    console.log(`- ${v.name} (ID: ${v.id})`);
  });
}

main().catch(err => console.error("❌ Error:", err.message));
