import math
def narcissistic( value ):
    power = len(str(value))
    sum = 0
    for x in str(value):
         sum+=math.pow(int(x), power)
    if sum == value:
        return True
    else:
        return False
        
#tests
test.assert_equals(narcissistic(7), True, '7 is narcissistic');
test.assert_equals(narcissistic(371), True, '371 is narcissistic');
test.assert_equals(narcissistic(122), False, '122 is not narcissistic')
test.assert_equals(narcissistic(4887), False, '4887 is not narcissistic')
