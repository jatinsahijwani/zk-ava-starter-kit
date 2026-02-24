# zk-ava-starter-kit

This repository demonstrates how to use **zk-ava-sdk** to generate and verify zero-knowledge proofs across multiple circuits, and verify them **on-chain** using deployed verifier contracts.

The demo showcases how different circuit artifacts can be loaded, provided with structured inputs, and verified seamlessly through a single execution script.

---

## 📦 Project Overview

This demo includes:

- Multiple circuit artifacts  
- Structured JSON inputs for testing  
- Deployment metadata for on-chain verification  
- A single execution entry point (`index.js`)  
- On-chain proof verification  

The purpose of this repository is to demonstrate how developers can integrate and verify zk-proofs using `zk-ava-sdk` in a clean and scalable way.

---

## 🧠 Circuits Included

The following circuit artifacts are included:

### 1. addition  
**Input:**
```json
{
  "a": "3",
  "b": "5"
}

### 2. ageCheck  
**Input:**

{
  "age": "21"
}

### 3. countryCheck  
**Input:**

{
  "country": "842"
}

### 4. hash  
**Input:**

{
  "preimage": [123, 456]
}

### 5. multiplier  
**Input:**

{
  "x": "3",
  "y": "9"
}
```

Each circuit has its own artifact folder in the root directory.

---

## 📁 Project Structure

```
root/  
│  
├── artifacts/  
│   ├── addition/  
│   │   ├── deployment.json  
│   │   └── ...  
│   ├── ageCheck/  
│   ├── countryCheck/  
│   ├── hash/  
│   ├── multiplier/  
│  
├── inputs/  
│   ├── addition.json  
│   ├── ageCheck.json  
│   ├── countryCheck.json  
│   ├── hash.json  
│   ├── multiplier.json  
│  
├── index.js  
└── README.md  
```
---

## 📄 Artifacts & Deployment Details

Each circuit folder inside `artifacts/` contains:

- Circuit compiled artifacts  
- Verifier-related files  
- `deployment.json`  

### deployment.json

This file contains the on-chain deployment details of the verifier contract for that specific circuit.

It typically includes:

- Contract address  
- Network information  
- Deployment metadata required for proof verification  

The SDK uses this information to verify proofs directly on-chain.

---

## 🧪 Inputs

The `input/` folder contains structured JSON inputs corresponding to each circuit.

These inputs are passed into `verifyProof()` inside `index.js` to:

1. Generate the proof  
2. Verify it locally (if applicable)  
3. Verify it on-chain using the deployed verifier  

You can modify these JSON files to test different scenarios.

---

## 🚀 How It Works

Inside `index.js`:

- The script loads inputs  
- Calls `verifyProof(input, artifactPath)`  
- Generates the zk-proof  
- Uses deployment metadata  
- Verifies the proof on-chain  
- Logs the result  

Everything runs from a single entry point.

---

## ▶️ Run the Demo

```bash
npm install  
node index.js
```  

You will see:

- Circuit-by-circuit execution logs  
- Proof generation output  
- On-chain verification status  
- Success / failure messages  

---

## 🏗 What This Demonstrates

This repository demonstrates:

- Multi-circuit proof handling  
- Clean artifact structure  
- On-chain verification integration  
- Developer-friendly SDK usage  
- A scalable pattern for adding new circuits  

### Adding a New Circuit

1. Add its artifacts inside `artifacts/`  
2. Add its input JSON inside `input/`  
3. Add configuration in `index.js`  
4. Run the script  

---

## 💡 Purpose

This demo was created to showcase the power and simplicity of **zk-ava-sdk** for developers who want:

- Easy zk-proof generation  
- Clean artifact management  
- Simple on-chain verification flow  
- A production-ready integration pattern  

---