// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Expected to include --inspect
console.log(process.argv)

if (!process.argv.join().includes('inspect')) {
  console.log('inspect is not included :(')
} else {
  console.log('inspect is included! :)')
}
