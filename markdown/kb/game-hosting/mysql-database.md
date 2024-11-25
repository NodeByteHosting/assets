# Disclaimer
NodeByte Hosting and NodeByte LTD are not responsible for any of your data stored on these databases. We do not access your database without consent from the panel owner.
Once the database is deleted by anyone who has the "Delete Database" permissions we are unable to retrieve the data. By creating a database you are responsible for the
data stored and the database

## Overview

Databases can be used to store your players data and allow you to manage some plugins instead of using a yaml, json etc...

All our plans comes with 10 SQL Databases

## Creating a MySQL Databse

From the [Game Panel](https://panel.nodebyte.host/) load up **your server** and navigate to "Databases".

You will see something like this:

![](https://nodebyte.host/kb/mySQL/page.png)

Click on "New database" and a form will pop up.

![](https://nodebyte.host/kb/mySQL/create.png)

Once on this model please fill out "Database name" and "Connections from"

Database name - The name of your database (Required)
Connections from - Where to allow the connections from (IP addresses). This is optional, if you leave it blank any one can connect to your database.

Once filled out click on "Create database" and it will give you your very own database.

![](https://nodebyte.host/kb/mySQL/created.png)

## Connecting to your database

With Game Panel update v1.2.0 we have added the ability to connect to your database via **phpMyAdmin**

On the created database click on the <Icon title="Windows" class="-my-1 text-xl" icon="ion:arrow-up-right-box-outline" /> icon and it will open a new tab with phpMyAdmin.

![](https://nodebyte.host/kb/mySQL/phpmyadminunfilled.png)

Please fill out your own login details that can be shown when you click on the <Icon title="Windows" class="-my-1 text-xl" icon="mdi:eye" /> icon on the Game Panel

It will bring up something like this:

![](https://nodebyte.host/kb/mySQL/connectiondetails.png)

You can click on the Username and password fields to copy your username and password then paste them into phpMyAdmin.

![](https://nodebyte.host/kb/mySQL/phpmyadminfilled.png)

Once filled out click on "Go"

When you are logged into your database you can access your database tables by going to your database which we named at the start. (Exmaple: s11_Example)

![](https://nodebyte.host/kb/mySQL/table.png)

After all of this you will be good to go on managing your own database. If you have any questions or concerns, please reach out to our support teams either by our [Discord](https://discord.gg/nodebyte) or [Support Tickets](https://nodebyte.host/submitticket.php)