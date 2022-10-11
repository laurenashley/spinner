const print = (char, ms) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, ms);
};

print('|', 100);
print('/', 300);
print('-', 500);
print('\\', 700);
print('/', 900);
print('-', 1100);
print('|', 1300);