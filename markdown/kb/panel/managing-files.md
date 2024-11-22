## Introduction

Welcome to NodeByte's guide on how to manage files using SFTP (Secure File Transfer Protocol). In this article, we will walk you through the process of connecting to your server via SFTP, uploading, downloading, and managing files. SFTP is a secure and efficient way to transfer files between your local system and your server.

## What is SFTP?

SFTP, or Secure File Transfer Protocol, is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It is similar to FTP but with added security features.

## How to Connect to SFTP

To connect to your NodeByte server via SFTP, you will need the following information:

- **Hostname**: Your server's IP address or domain name.
- **Port**: The default port for SFTP is 22.
- **Username**: Your NodeByte account username.
- **Password**: Your NodeByte account password (or private key for key-based authentication).

You can use an SFTP client such as FileZilla or Cyberduck to connect to your server. Follow these steps:

1. **Open your SFTP client.**
2. **Enter your server's details:**
   - For [WinSCP](https://winscp.net/eng/index.php) (<Icon title="Windows" class="text-md" icon="fa6-brands:windows" />), go to `New Site` 
   - For [FileZilla](https://filezilla-project.org/) (<Icon title="Windows" class="text-xl -my-1" icon="fa6-brands:windows" /> <Icon title="Mac" class="text-xl -my-1" icon="fa6-brands:apple" /> <Icon title="Linux" class="text-xl -my-1" icon="fa6-brands:linux" />), go to `File > Site Manager > New Site`.
   - For [Cyberduck](https://cyberduck.io/) (<Icon title="Windows" class="text-xl -my-1" icon="fa6-brands:windows" /> <Icon title="Mac" class="text-xl -my-1" icon="fa6-brands:apple" />), go to `File > New Connection`.
3. **Enter your server's hostname, port, username, and password.**
4. **Click Connect.**

## Managing Files with SFTP

Once connected, you can manage your files in several ways:

### Uploading Files

To upload files to your server:

1. **Navigate to the local files you want to upload.**
2. **Drag and drop files into the server directory in your SFTP client.**
3. Alternatively, you can use the upload option in your SFTP client.

### Downloading Files

To download files from your server:

1. **Navigate to the server files you want to download.**
2. **Drag and drop files into your local directory in your SFTP client.**
3. Alternatively, you can use the download option in your SFTP client.

### Editing Files

To edit files on your server:

1. **Right-click the file you want to edit and choose "Edit" or "View/Edit" in your SFTP client.**
2. **Make the desired changes in your local editor.**
3. **Save the file to update it on the server.**

## Troubleshooting

If you encounter issues while using SFTP, try the following:

- **Check your credentials**: Make sure your username and password are correct.
- **Check your network connection**: Ensure your internet connection is stable.
- **Firewall and port issues**: Verify that your firewall is not blocking the SFTP connection and that port 22 is open.
- **Re-check your server's IP address**: Make sure you are connecting to the correct IP address.

## Conclusion
Now you know how to manage files using SFTP with NodeByte! By following the steps outlined in this guide, you can efficiently upload, download, and edit files on your server. If you have any further questions, feel free to reach out to our support team.