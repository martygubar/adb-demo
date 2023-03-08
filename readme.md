Host where the application is deployed: 
adb-demos
ip: 132.145.132.38

systemctl status httpd

Web site root:
/var/www/html/

scp index.html adb-demos:
ssh adb-demos sudo cp /home/opc/index.html /var/www/html/

# images
scp asset/images/*.png adb-demos:images/
ssh adb-demos sudo cp "/home/opc/images/*" /var/www/html/asset/images/

