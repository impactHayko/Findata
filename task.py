cA_Q1_data = {}
cA_Q2_data = {}
cB_Q1_data = {}
cB_Q2_data = {}


def save(filename, dictname):
    with open(f'{filename}', 'r') as file:
        for line in file:
            key, value = line.strip().split(': ')
            dictname[key] = value


save('CompanyA_Quarter1.txt', cA_Q1_data)
save('CompanyA_Quarter2.txt', cA_Q2_data)
save('CompanyB_Quarter1.txt', cB_Q1_data)
save('CompanyB_Quarter2.txt', cB_Q2_data)

res = {}


def difference(company2, company1):
    for key, value in company2.items():
        nums1 = value.replace('$', '').replace(',', '')
        if nums1.isdigit():
            if key in company1:
                nums2 = company1[key].replace('$', '').replace(',', '')
                if nums2.isdigit():
                    res[key] = (int(nums1) - int(nums2))


print('Enter 1 for Company A')
print('Enter 2 for Company B')
print('Choose the company: ', end='')
try:
    choice = input()
    if int(choice) == 1:
        difference(cA_Q2_data, cA_Q1_data)
        for items in res.items():
            print(items)
    if int(choice) == 2:
        difference(cB_Q2_data, cB_Q1_data)
        for items in res.items():
            print(items)
except Exception as e:
    print(e)
