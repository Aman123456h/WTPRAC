from PIL import Image
from numpy import nps

a=Image.open(r'C:\Users\admin\Desktop\digitnumberimg1-300x30012.jpg')
b=Image.open(r'C:\Users\admin\Desktop\digitnumberimg0-300x300.jpg')

img1=nps.array(a)
img2=nps.array(b)

a1=Image.fromarray(img1)
b1=Image.fromarray(img2)

img3=img1+img2
img4=img1+img2

img3.show()
img4.show()
a1.show()
b1.show()



