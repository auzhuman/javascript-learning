# str = ["lolita","lola","lolha"]
str = ["flower","flower","flower","flower","flowerr"]

l = len(str)
li = len(min(str))
print(li,l)

# def prefixs (index,temp):

#     for i in range(l):
#         if str[i][index] == temp :
#             pass

#         else:
#             return False
#     return True

class solution:
    def firstf(self,str):
        def prefixs (index,temp):

            for i in range(len(str)):
                print(i,index)
                if str[i][index] == temp :
                    pass

                else:
                    return False
            return True

        prefix_ = ""
        j = 0

        for i in range(len(str)):
            
            
            if (len(min(str)))<= j :
                print("break from  len comp")
                break
            else:
                prefixn = str[i][j]

                i = prefixs(i,prefixn)
                if i == True:
                    prefix_ = prefix_ + prefixn
                    j = j+1
                    print("trueprefix",prefix_)
                else:
                    prefix_ = prefix_
                    print("false",prefix_)
                    
                    break
        return prefix_

obj = solution()
print(obj.firstf(str))



        
