# Building Intelligent Application
## Watch the demo
Want to learn about this end-to-end demonstration? Check out this 15 minute video that describes the entire scenario. 

[](youtube:c97bex3ErS4)

After watching the video, you can demonstrate the individual steps yourself.

## Introducing Oracle MovieStream
Oracle MovieStream is a fictitious on-line movie streaming application. These demonstrations will highlight how MovieStream is able to deliver intelligent applications on Oracle Cloud Infrastructure that are powered by Autonomous Database. MovieStream achieved many benefits that all customers can learn from:
* Simplify your data architecture by eliminating data silos
* By eliminating silos – you can now more easily infuse your applications with intelligence
* Developers should not have to make compromises - use a data platform that offers APIs that best match the application development needs
* And finally, you can’t forget that Non-functional requirements: security, high availability, scalability - are critical!

[](youtube:iR-5uwHD1BQ)

<details>
<summary>**Try it!**</summary>

Experience MovieStream!
* [Go to the MovieStream application](http://129.159.54.249/)

</details>

## Use modern APIs for application development
Time to market is critical and developer productivity is the key to success. Autonomous Database offers a range of APIs - including MongoDB, Oracle SODA or Oracle REST Data Services - to meet developer productivity requirements. 

Develop your application using a schemaless JSON data model. This allows for a hybrid development approach: all of the schema flexibility and speedy application development of NoSQL document stores, combined with all of the enterprise-ready features in Autonomous Database. 

[](youtube:qBZJYWTaOLw?start=181;rel=0)

## Use SQL analytics across all types of data
The Oracle SQL engine is the most advanced and analytically rich on the planet. Use it to query relational, JSON, spatial and other unstructured types. The data may reside inside Autonomous Database - or in data lakes on OCI, AWS, Azure and more. A single query can span these sources - allowing you to gain insights that would otherwise be difficult to achieve.

Let's find MovieStream customers that are at risk and better understand their viewing behavior.

[](youtube:W87C7SbVkSo)

<details>
<summary>**Try it!**</summary>

Use the demo user, load data and run queries:

* [Go to Database Actions](https://qggemtywectzfj9-db20220725133708.adb.sa-saopaulo-1.oraclecloudapps.com/ords/moviestream/_sdw/)
* Log in as moviestream / cloudWorld2022#
* [See LiveLabs](https://oracle-livelabs.github.io/adb/movie-stream-story-lite/workshops/ocw-freetier/index.html?lab=analyze-sales-converged#Task2:Usefiltersandjoins) for the specific steps-by-step instructions

</details>

## Graph analytics generate movie recommendations
Autonomous Database offers comprehensive graph analytics. MovieStream uses graphs to produce movie recommendations. The Personalized SALSA algorithm finds customers with similar purchasing behavior. What movies are people in your group watching? Maybe you'll like them as well!

[](youtube:Be4YtjdEFGM)

<details>
<summary>**Try it!**</summary>
* [Go to Graph Studio](https://qggemtywectzfj9-movieapp.adb.sa-saopaulo-1.oraclecloudapps.com/graphstudio/?root=gs-homepage&tenant=OCID1.TENANCY.OC1..AAAAAAAAFCUE47PQMRF4VIGNEEBGBCMMOY5R7XVOYPICJQQGE32EWNRCYX2A&database=MOVIEAPP&service=ATP&databaseMode=READ%20WRITE&databaseVersion=19c)
* Log in as moviestream / cloudWorld123#
* Follow the [steps in LiveLabs](https://oracle-livelabs.github.io/adb/movie-stream-story-lite/workshops/ocw-freetier/index.html?lab=apply-graph#Task2:Loadagraphintomemory)

</details>

## Predict customer churn and identify promotion targets
Analyzing past behavior allows you to understand who's no longer a customer. Let's get in front of future potential losses by predicting high value customers that are likely to leave. MovieStream has a deal with pizza franchises that allows them to offer free pizza to its at-risk customers. There is a limit to the marketing budget - so MovieStream will need to prioritize. Use spatial analytics to find customers that are near pariticipating pizza locations - and narrow that list based on high value customers that are likely to churn.

[](youtube:pkBB1LcLSKg)

<details>
<summary>**Try it!**</summary>
* [Go to OML](https://qggemtywectzfj9-movieapp.adb.sa-saopaulo-1.oraclecloudapps.com/omlusers/login.html?tenant=OCID1.TENANCY.OC1..AAAAAAAAFCUE47PQMRF4VIGNEEBGBCMMOY5R7XVOYPICJQQGE32EWNRCYX2A&database=MOVIEAPP&redirect_uri=https://qggemtywectzfj9-movieapp.adb.sa-saopaulo-1.oraclecloudapps.com/omlusers/api/oauth2/v1/login&state=GDUr9XEtoS7YxS3THlTtwEIzahxlkSk3kbK6WktxtfI=.-1202391631678242496.1665682842150)
* Log in as moviestream / cloudWorld123#
* Follow the [steps in LiveLabs](https://oracle-livelabs.github.io/adb/movie-stream-story-lite/workshops/ocw-freetier/index.html?lab=predict-churn)

</details>

## Feeding analytics back to the MovieStream application
Now that we have new movie recommendations and targeted offers, feed the results back into the application!

[](youtube:qBZJYWTaOLw?start=1256)
