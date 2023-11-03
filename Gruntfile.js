module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    availabletasks: {           
      // task
      tasks: {
        options: {
          filter: 'exclude',
          tasks: ['mkdir', 'availabletasks', 'warn', 'default']
        }
      } 
      // target
    },
    backupDevelopers: {
      dest: './data/devs'
    },
    backupProducts: {
      dest: './data/products'
    },
    backupDeveloperApps: {
      dest: './data/devapps'
    },
    backupTargetServers: {
      dest: './data/targetservers'
    },
    backupOrgKVM: {
      dest: './data/kvm/org'
    },
    backupEnvKVM: {
      dest: './data/kvm/env'
    },
    backupCompanies: {
      dest: './data/companies'
    },
    backupCompanyApps: {
      dest: './data/companyapps'
    },
    backupCompanyDevs: {
      dest: './data/companydevs'
    },
    backupUsers: {
      dest: './data/users'
    },
    backupRoles: {
      dest: './data/roles'
    },
    backupUserRoles: {
      dest: './data/userroles'
    },
    backupEnvCache: {
      dest: './data/cache/env'
    },
    recoverProducts: {
      src: 'data/products/*'
    },
    recoverProduct: {
      src: 'data/product/*'
    },
    recoverEnvCaches: {
      src: 'data/cache/env/*'
    },
    recoverEnvCache: {
      src: 'data/cache/env/*'
    },
    recoverTargetServers: {
      src: 'data/targetservers/env/*'
    },
    recoverTargetServer: {
      src: 'data/targetservers/env/*'
    },
    recoverDeveloper: {
      src: 'data/targetservers/env/*'
    },
    recoverDevelopers: {
      src: 'data/targetservers/env/*'
    },
    recoverRoles: {
      src: 'data/roles/*'
    },
    recoverRole: {
      src: 'data/roles/*'
    },
    recoverEnvKvms: {
      src: 'data/kvm/env/*'
    },
    recoverEnvKvm: {
      src: 'data/kvm/env/*'
    },
    recoverDeveloperApps: {
      src: 'data/DeveloperApps'
    },
    recoverDeveloperApp: {
      src: 'data/DeveloperApp'
    },
    recoverCompanies: {
      src: 'data/Companies/*'
    },
    recoverCompany: {
      src: 'data/Company/*'
    },
    recoverCompanyDevs: {
      src: 'data/companydevs/*'
    },
    recoverCompanyDev: {
      src: 'data/companydev/*'
    },
    recoverCompanyApps: {
      src: 'data/companyapps/*'
    },
    recoverCompanyApp: {
      src: 'data/companyapp/*'
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['availabletasks']);
  grunt.registerTask('backupAll', ['backupProducts', 'backupDevelopers', 'backupDeveloperApps', 'backupCompanies', 'backupCompanyApps', 'backupCompanyDevs', 'backupUsers', 'backupRoles', 'backupTargetServers', 'backupEnvKvms', 'backupEnvCaches']);
  grunt.registerTask( ['recoverProducts','recoverProduct', 'recoverDevelopers', 'recoverDeveloper', 'recoverDeveloperApps', 'recoverDeveloperApp', 'recoverCompanies', 'recoverCompany', 'recoverCompanyApps', 'recoverCompanyApp', 'recoverCompanyDevs', 'recoverCompanyDev', 'recoverRoles', 'recoverRole', 'recoverTargetServers', 'recoverTargetServer', 'recoverEnvCaches', 'recoverEnvCache', 'recoverEnvKvms', 'recoverEnvKvm']);
  grunt.registerTask('tasks', ['availabletasks']);

};
