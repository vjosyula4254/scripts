pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
        maven  'Maven'
    }
    
    stages {
     
        stage('Build Setup') {
            steps {
                dir('.') {
                    sh "npm install"
                    sh "npm install grunt-cli"
                }
            }
        } 

          stage('Backup') {
            steps {
                dir('.') {
                    withCredentials([usernamePassword(credentialsId: "ferguson-edge-rto-rpo-cred",
                            passwordVariable: 'apigee_pwd',
                            usernameVariable: 'apigee_user')]) {
                    sh "grunt ${params.backup_resource} --apigee_user=${apigee_user} --apigee_pwd=\'${apigee_pwd}\' --apigee_org=${params.apigee_org} --backup_version=${params.version} -v"

                    }
                }
            }
        } 

     }
        
 }