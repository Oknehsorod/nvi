userdel nvi
rm -rf /home/nvi
useradd -D -s /bin/bash
useradd -m nvi
passwd -d nvi
su - nvi -c "
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
"
