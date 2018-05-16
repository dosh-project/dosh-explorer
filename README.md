## About dosh

dosh is a cryptocurrency focused on providing a decentralized mechanism of exchange, and anonymity via untraceable and unlinkable transactions.

You can read more about it at http://getdosh.org

## About dosh-explorer

This in an experimental block explorer for dosh.

## Installation on Ubuntu 16.04
1) Configure your webserver:

```bash
sudo apt-get install apache2
sudo apt-get install php libapache2-mod-php php-mcrypt php-curl
sudo a2enmod headers
sudo vim /etc/apache2/sites-available/dosh-explorer.github.io.conf

  <VirtualHost *:80>
      ServerAdmin webmaster@dosh-explorer.github.io
      ServerName dosh-explorer.github.io
      ServerAlias www.dosh-explorer.github.io
      DocumentRoot /var/www/dosh-explorer.github.io/public_html/
      ErrorLog /var/www/dosh-explorer.github.io/logs/error.log
      CustomLog /var/www/dosh-explorer.github.io/logs/access.log combined
      <Directory /var/www/dosh-explorer.github.io/public_html/>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
      </Directory>
  </VirtualHost>

sudo mkdir -p /var/www/dosh-explorer.github.io/public_html
sudo mkdir -p /var/www/dosh-explorer.github.io/logs
sudo touch /var/www/dosh-explorer.github.io/logs/error.log
sudo touch /var/www/dosh-explorer.github.io/logs/access.log
sudo a2ensite dosh-explorer.github.io
sudo service apache2 reload
```

2) Run doshd as follows:
```bash
./doshd --enable-cors=* --enable-blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=18333
```
3) Upload the to your website and change `api` variable in `config.js` to point to your daemon.

## Community and support

You can find us at:

[Telegram](https://t.me/doshcurrency)

## License

dosh-explorer is licensed under the GNU Lesser General Public License v3.0

## Credits

Partially based on https://github.com/Karbovanets/Karbowanec-Blockchain-Explorer
