count = []
a, b = 0, 12
for _ in range(12):
    count.append(a)
    a, b = b, a + b
    print(count)
