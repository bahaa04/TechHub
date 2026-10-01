const admin = require('firebase-admin');

const serviceAccount = {
  "type": "service_account",
  "project_id": "techhub-67e3d",
  "private_key_id": "782e11e6640e1a26cdd35119e81e9b0cda38dc05",
  "private_key": "-----BEGIN PRIVATE KEY-----
MIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC5DOOYjbDJpzPD
2aEftDwKo8+vsXw0myiFf6DgsLJFXp4skvirm6vnrSzjFpM0EDncK7jNd3xu4MQL
XAAcnlKSGYSBwGB0MEvPIUaKh66Jv4aAIxwMyPGkBFUqNoutK5/xLHSNF7kprTsx
Y3bPdVEUSqUhn8mPhKqFqu+oMWFRIWfYhWJNQ3BqyfZAdhE+XOxowlmpCTGNmAqI
PysYglIxKth66LkTBrxkLdylJ2vTsO0aotak9igAvov6DDWdcgE3KcIZ4TgG1DNf
3Egmh0wd8XZrigApG/nrYnUeZsUh8UDLyJmndbw0cfdyRA4FnC1zPAQnhZ9l09lg
kBPzGk/xAgMBAAECgf837g1cLncge8jJiR2J14/OJ3S+RYak38B/mPOm9cDr9o0Y
K9O9CnAKtey7NjeHpN/YC97vOw4A9S5LwKLIA5IxVkUWcm60r2Q6VnRbqma2e4zL
bdEsjA9841JaT+InlOfinO0dN+5fCly5sLZYPb0jxOvkHcdt+UsQ23lT/JjNTCbo
VNnOQ/2ATJ0RQwxPegXfok3cCNXDfKrwQtZE3hvn3j+cofroR8nGXhQsJzXmdvNF
g61d3O3Y8fVEFP9Y4vbZ9JdZ3xEyw3WnLaUjZ5IF3fw3z/eObLg4zXMye4L70YMd
QmM4rCiQ41Us4B3hqMEjoZ48pLHfj8zW2qYn64ECgYEA9gBOEPh0Bk8ZrN46c9+r
mcsWzvM4YMbNF5QiUBg+oSl0GoYmvIIHhm9UbIlKmC2mOj2gGyxxzBplRuWwm3O9
RaRXhRz5GNdue3g9ZvRR59gi4Qq7E8uWO6t2NB/g1OoDjxX0xxZMnWG47/H7XWs8
n0+XuCTJIQguOYiXtpfezjECgYEAwJJgpajLIG/tHZKefUka67gIa7bDWewwgDo9
21ClsptvGQH4r+xccb2+Nn2GXTDV17d+JVMposBNgZbp03hBJKkBkzy4aw03tAuP
ATv4Uebkec0BmASMsB3v0iiEa5MQCMhd8uOtCIdMmHRtxawSLnHFW7+zNRveH40E
ZZg2bcECgYA+GJ+cGws2mHrzrvj0TO6FGMW+IZkGnMgifosWyrfseIlNNLXMecoq
finCZ/mDZmqCYxHqKhLjoXoVJl+pLdMGJFDPUhvy0FacJiLhvSR7sIxFYC8O9SIM
F+DzkWRwek3BrZonMxLN22ASeXOpBiu8TxwOKIL4qpb4gOlC9x0P0QKBgDGU/sFo
hnRhnSGiIKCNdBsBFVn2grHieFJrrIWNbDxifOZpdYiGSP8YJaOOCkxwSH70RcyC
bxPyg4I8QxQpwEwaH8ezOKCHlLIMz9M3h6Y+1tDtkd18PmUSMC9iM0YnZVd9j4L8
UA8EFxqhz6m3ti6zKGeJIjEobbad7mXiHRGBAoGBALYI0zyFFrgmyMN3inDTKhEQ
HuSIOqGaqMEuFu9CxS1PL9c1y2Ek0AiuyPjTJ1lvcmbw/Fa0wrba77ejiyjNtEao
qGzRj1BDfXy93emRq61Vms03485NoxKVzGsYY/IaFy9rOypcN1NG9JKyud9PrxG8
VGJvd/rqd4GJRhJ31XoU
-----END PRIVATE KEY-----",
  "client_email": "ctf-readonly@techhub-67e3d.iam.gserviceaccount.com",
  "client_id": "111933843954673089202",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ctf-readonly%40techhub-67e3d.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { db };
