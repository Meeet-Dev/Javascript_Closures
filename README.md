# 📘 JavaScript Core Concepts & Practice Problems

This repository contains **examples and practice problems** that cover essential **JavaScript concepts**, forming the foundation for advanced development in frameworks like **React**, **Node.js**, and beyond.

Whether you're a beginner solidifying the basics or an experienced dev brushing up for interviews, this resource is built to help you understand how JavaScript works under the hood.

---

## 📚 Core Concepts Covered

### 1️⃣ Execution Context & Call Stack

- **Execution Context**: The environment in which JavaScript code is executed. Each function call creates a new execution context.
- **Call Stack**: A stack structure that tracks execution contexts. Functions are pushed to the stack when called and popped off when execution finishes.

---

### 2️⃣ Hoisting, Scope, and Block vs Function Scope

- **Hoisting**: JavaScript's default behavior of moving declarations to the top of their scope (only declarations are hoisted, not initializations).
- **Function Scope**: Variables declared with `var` are scoped to the entire function in which they are declared.
- **Block Scope**: Variables declared with `let` or `const` are limited to the block `{}` in which they are defined.

---

### 3️⃣ Variable Declarations: `var`, `let`, and `const`

| Keyword | Scope         | Redeclarable | Reassignable | Hoisted |
|---------|---------------|--------------|--------------|---------|
| `var`   | Function       | ✅ Yes        | ✅ Yes        | ✅ Yes (undefined) |
| `let`   | Block          | ❌ No         | ✅ Yes        | ✅ Yes (but uninitialized) |
| `const` | Block          | ❌ No         | ❌ No         | ✅ Yes (but uninitialized) |

---

### 4️⃣ Closures

A **closure** is created when a function retains access to variables from its **outer lexical scope**, even after the outer function has returned.


