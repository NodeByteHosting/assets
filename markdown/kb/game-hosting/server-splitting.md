## Overview

In the Game Panel v1.2.0 update we brought out "Server Splitting" which is supported on the following plans: Ember, Blaze, Inferno, Firestorm and Supernova

When Splitting your server it will take resources from your main server to the sub created server **Ensure you know what you are doing when assigning resources**

## How to split your server. 

From the [Game Panel](https://panel.nodebyte.host/) load up **your server** and navigate to "Server Splitter".

You will see a page like this:

![](https://nodebyte.host/kb/serversplit/page.png)

Click on the "+" box to create a new sub server

![](https://nodebyte.host/kb/serversplit/plus.png)

Once clicked you will see a new model like this:

![](https://nodebyte.host/kb/serversplit/new.png)

Fill out:

Name - The name of your sub server
Description - The description of your sub server
CPU Limit - How much CPU you would like it to use
Memory Limit - How much Memory/RAM you would like it to use
Allocations - Minimum 1 (For IP usage)

And some optional parts such as

Databases - How many Databases you would like the Sub Server to use
Backups - How many backups you would like the Sub Server to use
Proxies - How many proxies you would like the Sub Server to use

Choose what version of Minecraft you would like it to use

![](https://nodebyte.host/kb/serversplit/eggs.png)

You can choose if you would like the sub users to be synced across. 
If the "Gigabytes" option is enabled it will use that instead of "Megabytes" for Memory/RAM and Disk

Once this is all filled out click on "Split Server"

![](https://nodebyte.host/kb/serversplit/split.png)

Once the server is split you will see a new option on your "Server Spilitter" Page.

![](https://nodebyte.host/kb/serversplit/created.png)

If you click on the sub server, you can click on <Icon title="Windows" class="-my-1 text-xl" icon="ion:arrow-up-right-box-outline" /> to be directed to the new sub server you created. 

You can also access the server via the **dashboard**

![](https://nodebyte.host/kb/serversplit/dash.png)

## Editing the resources

WARNING: Any adddtional resources assigned to the sub server will affect the resources from the main server.

From the **Main Server** head back into "Server Spiltting" and click on the server slipt you would like to edit.

On this model you can edit all the options you used when creating the server (Changing eggs by yourself is not yet supported). 

If you want to sync your sub users you can do so by clicking on the "Sync Subusers" option.

![](https://nodebyte.host/kb/serversplit/sync.png)

To delete you sub server you can click on <Icon title="Windows" class="-my-1 text-xl" icon="mdi:trash" /> and it will delete the subserver and all resources will be reverted back to the main server. 