# How to setup your VPS Hosting.

Once you have purchased your VPS Hosting head over to [My Services](https://billing.nodebyte.host/clientarea.php?action=services)

## Accessing your Account on our VPS Panel.

Once you are at the "My Services" page you should see your product as below:
![](https://nodebyte.host/kb/vpshosting/myservices.png)

Click on the "VPS Hosting - {Your plan name}". 

You will see an image like this:
![](https://nodebyte.host/kb/vpshosting/product.png)

## Setting up your VPS

Click on "Open Control Panel" on your product - You will be then redirected to the setup screen and automatically signed into your account. 

![](https://nodebyte.host/kb/vpshosting/setup.png)

What you need to provide:

- "Name" - What you would like your server to be called. 
- "Timezone" - Your local timezone

- "Hostname" This is optional

Choose an operating system you would like to use from the selection provided

![](https://nodebyte.host/kb/vpshosting/os.png)

Once you have selected a Operating system to install click on "Install with {What you have chosen}"

![](https://nodebyte.host/kb/vpshosting/install.png)

Once clicked the VPS will start to install, you will see a screen like this:
![](https://nodebyte.host/kb/vpshosting/installing.png)

Once installed you will be redirected to the main dashboard
![](https://nodebyte.host/kb/vpshosting/panel.png)

## How to access your VPS

Once the setup is complete you should get an email from vps@nodebyte.host containing your IP, Port, User and Password. 

It will look like this:
![](https://nodebyte.host/kb/vpshosting/details.png)

Use any Terminal you would like (As long as it supports SSH access). 

For this example we are using [Termius](https://termius.com/)

When you load up your SSH client click fill in the details required to connect.

For command line the command to connect is:
```
ssh {username}@{IP}
```

On Termius it will be like this:

![](https://nodebyte.host/kb/vpshosting/Termius.png)

Once your details are entered click on "Connect" you will then be greeted by your own VPS to do what you need to do.

# Support

If you need help with your VPS Hosting feel free to reach out to our support team who are always willing to help you out. 

You can contact them by [opening a ticket](https://billing.nodebyte.host/submitticket.php)