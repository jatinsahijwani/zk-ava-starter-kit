const { verifyProof } = require("zk-ava-sdk");

/**
 * Circuits Configuration
 * Each circuit contains:
 * - name (for logging)
 * - input (public/private inputs)
 * - path (artifact folder)
 */
const circuits = [
  {
    name: "addition",
    input: { a: "3", b: "5" },
    path: "./artifacts/addition",
  },
  {
    name: "ageCheck",
    input: { age: "21" },
    path: "./artifacts/ageCheck",
  },
  {
    name: "countryCheck",
    input: { country: "842" },
    path: "./artifacts/countryCheck",
  },
  {
    name: "hash",
    input: { preimage: [123, 456] },
    path: "./artifacts/hash",
  },
  {
    name: "multiplier",
    input: { x: "3", y: "9" },
    path: "./artifacts/multiplier",
  },
];

async function verifyCircuit(circuit) {
  console.log("--------------------------------------------------");
  console.log(`🚀 Starting verification for circuit: ${circuit.name}`);
  console.log("📂 Artifact path:", circuit.path);
  console.log("📝 Input provided:", JSON.stringify(circuit.input, null, 2));

  try {
    console.log("⏳ Generating and verifying proof...");

    const proof = await verifyProof(circuit.input, circuit.path);

    console.log("✅ Proof verification successful!");
    console.log("🔐 Proof output:");
    console.log(proof);
  } catch (error) {
    console.error("❌ Error during proof verification!");
    console.error("Circuit:", circuit.name);
    console.error("Error details:", error.message || error);
  }

  console.log(`🏁 Finished processing circuit: ${circuit.name}`);
  console.log("--------------------------------------------------\n");
}

async function main() {
  console.log("===============================================");
  console.log("🧠 zk-ava-sdk Multi-Circuit Proof Verification");
  console.log("===============================================\n");

  for (const circuit of circuits) {
    await verifyCircuit(circuit);
  }

  console.log("🎉 All circuits processed!");
}

main();