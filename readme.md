# Apigee Backup And Recover Tool

## Description

Apigee backup and recover tool is the node based grunt task manager. On execution of backup commands the call will be made to apigee management api and the data will be saved in to the database. On execution of recover commands the data will be recovered from the database based on the provided backup version. 'config.js' file has the apigee org details for backup and recover data for a specific org.

## Purpose

The DevOps engineer should be able to backup and restore any resource by executing steps listed here.

## Pre-requisite

- NodeJS
- Java 8
- Maven
- IDE (IntelliJ or VS Code)
- Access to Backup-data-service (https://bitbucket.org/sidgs/backup-data-service.git)
- MySQL DB must be installed and running on the localhost
  - MySQL DB can be installed from the following location https://dev.mysql.com/downloads/installer/
  - Default username and password are root and password

## List of Resources

Following data can be backup and recover with the tool:

- Developers
- Products
- Developer Apps
- Companies
- Company Apps
- Company Developers
- App keys
- KVMs (env)
- Caches
- Users
- Roles
- Target Servers

## Installation Instruction

1. Download and install Node.js at http://nodejs.org/download/.
1. Open a command prompt and install Grunt using the `npm` command.
   ```
   npm install -g grunt-cli
   ```
1. Clone this repository.
   ```
   git clone https://bitbucket.org/sidgs/apigee-devops-rtorpo.git
   ```
1. Change the directory to apigee-devops-rtorpo.
   ```
   cd apigee-devops-rtorpo
   ```
1. Install the Node.js dependencies listed in package.json.
   ```
   npm install
   ```

## Set NODE_ENV Environment Variable

    ```
    #NODE_ENV for local
    $Env:NODE_ENV = "local"

    #NODE_ENV for Dev
    $Env:NODE_ENV = "dev_secure"

    #NODE_ENV for Prod
    $Env:NODE_ENV = "prod_secure"

    echo $Env:NODE_ENV
    ```

**Note** All the backup and recover commands should be run inside the directory apigee-devops-rtorpo.

Change the directory to apigee-devops-rtorpo

    ```
    cd apigee-devops-rtorpo
    ```

### Backup Api Products

    ```
    grunt backupProducts --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Developers

    ```
    grunt backupDevelopers --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Developer Apps

    ```
    grunt backupDeveloperApps --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Companies

    ```
    grunt backupCompanies --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Company Apps

    ```
    grunt backupCompanyApps --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Company Developers

    ```
    grunt backupCompanyDevs --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Users

    ```
    grunt backupUsers --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Roles

    ```
    grunt backupRoles --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Target Server

    ```
    grunt backupTargetServers --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup KVM

    ```
    grunt backupEnvKvms --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Backup Caches

    ```
    grunt backupEnvCaches --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Target Servers

    ```
    grunt recoverTargetServers --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Target Server by Name

    ```
    grunt recoverTargetServer --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={targetServer_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Developers

    ```
    grunt recoverDevelopers --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Developer by Email

    ```
    grunt recoverDeveloper --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={developer_email} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Api Products

    ```
    grunt recoverProducts --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Api Product by Name

    ```
    grunt recoverProduct --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={product_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Developer Apps

    ```
    grunt recoverDeveloperApps --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Developer App by Name

    ```
    grunt recoverDeveloperApp --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={app_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover KVMs

    ```
    grunt recoverEnvKvms --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover KVM by Name

    ```
    grunt recoverEnvKvm --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={kvm_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Caches

    ```
    grunt recoverEnvCaches --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Cache by Name

    ```
    grunt recoverEnvCache --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={cache_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Companies

    ```
    grunt recoverCompanies --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Company by Name

    ```
    grunt recoverCompany --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={company_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Company Developers

    ```
    grunt recoverCompanyDevs --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Company Developer by Name

    ```
    grunt recoverCompanyDev --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={dev_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Company Apps

    ```
    grunt recoverCompanyApps --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Company by Name

    ```
    grunt recoverCompanyApp --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={app_name} --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Roles

    ```
    grunt recoverRoles --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --backup_version=1.0.0-DEFAULT -v
    ```

### Recover Role by Name

    ```
    grunt recoverRole --apigee_user={apigee_user} --apigee_pwd='{apigee_pwd}' --apigee_org=ferguson-api --apigee_env=mock --res_name={role_name} --backup_version=1.0.0-DEFAULT -v
    ```
