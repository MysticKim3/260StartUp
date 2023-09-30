### Github project
Order of using git
- git pull
- change code
- git commit
- git push  
- Always pull first to ensure a conflict isn't created, if conflict is created, then resolve merge conflict by combining different versions.
### EC2 Instance
- IP address of server: 3.221.169.128
- command remote shell into server: ssh -i {key} ubuntu@3.221.169.128
- use http to access server before https is set up
### How to deploy (Manually)
- Be in project directory on local machine
- ssh -i key ubuntu@website
- rm -rf services/simon/public  (or services/startup/public)
- mkdir -p services/simon/public (or services/startup/public)
- exit
- scp -r -i key * ubuntu@website:services/simon/public (or services/startup/public)
