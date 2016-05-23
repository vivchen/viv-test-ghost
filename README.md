In this guide, I will guide you step by step on how to set up Ghost, one of the best open source blogging platform, on IBM's Bluemix.

First, you will need to create **Bluemix** account.
You can start a free trial for 30 days. Once your trial is over, you are required to enter your credit card information, but you will not be charged as long as you remain within free-tier limit.

Feel free to use other NodeJS hosting, but this guide is specifically for **Bluemix**.

To make your deployment process as easy as possible, I have created a github repo that contains all the code needed to get you started, simply click **Deploy to Bluemix** button below.
> [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/bosung90/ghost-bluemix-deploy)

After logging in, you will need to provide **App Name**
Recommended Region is **IBM Bluemix US South**
Then simply press **Deploy** button

![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img2/content/images/2016/05/img2.PNG)

After waiting for about 10 minutes, the deployment will fail. This is expected because we have not set up our database.
Ghost normally runs on sqlite3 by default, but I have configured it to use MySQL instead. This was done through changing config.js file. The reason why we are using MySQL is because **any local files saved on Cloud Foundry Apps are not persistent** and files will be wiped clean once the app is redeployed.

Next, click on **APP DASHBOARD** button.
![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img3/content/images/2016/05/img3.PNG)
Then on the right side of the screen, click on **USE SERVICES OR APIS** button.

![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img4/content/images/2016/05/img4.PNG)
Then go all the way to the bottom and click on **Bluemix Labs Catalog**
![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img5/content/images/2016/05/img5.PNG)
In **Data and Analytics** section, click on **mysql experimental**
![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img6/content/images/2016/05/img6.PNG)
Here, ensure you select your ghost application in `App:` dropdown

Then press **CREATE** button
![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img7/content/images/2016/05/img7.PNG)
Once created, you will see a popup window **Restage Application**. Press cancel as you still need to add one more service.

You will need to add one more Service called **Cloudant NoSQL DB**.
This is required in order to save images (MySQL does not hold images).
Note: Cloudant NoSQL DB has space of 20GB for free-tier. 

![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img12/content/images/2016/05/img12.PNG)
Again, ensure you select your ghost application in `App:` dropdown
![](https://c4fb4c2f-54ba-49b6-b4ed-acb141ced43e-bluemix.cloudant.com/ghost-ghost-images/img13/content/images/2016/05/img13.PNG)

Once created, you will see a popup window **Restage Application**.
Go ahead and press **Restage** Button.

###That's it!

Simply go to your nodejs web application link, and go to
`https://<YourBluemixAppName>.mybluemix.net/ghost/`  to set your admin account.

######Thanks and I hope it helped!
Check out my blog at https://ghost.mybluemix.net/
