# Integrate all data

## Overview
Autonomous Database provides easy to use tools for integrating data into your database. See how to integrate different types of data from a variety of sources.

* [Go to LiveLabs](https://apexapps.oracle.com/pls/apex/r/dbpm/livelabs/view-workshop?wid=582&clear=RR,180&session=5232633923897)

## Load data from object stores
Autonomous Database can load data from multiple cloud stores - including OCI Object Storage, AWS S3, Azure Blob Storage and more. See how it's done.

[](youtube:3yMgKifFwG4:large)

## Data Lakes
### metadata....
### data

## Secure, cross-cloud data integration
Multi-cloud is the dominant enterprise architecture, which means securely integrating data across clouds is critical. Secure, multi-cloud support allows you to take advantage of the best cloud services and easily share data with partners and customers.

MovieStream is partnering with pizza chains around the country in order to deliver localized promotions. Let's take a look at how MovieStream integrates pizza location data from an Amazon S3 object store.

[](youtube:SN06726_45w:large)

<details>
    <summary class="tryit-button">Try it!</summary>
    ```
    <copy>
    -- Select the identity to use for the AWS IAM trust relationship
    -- Choose: tenancy_ocid, compartment_ocid or database_ocid
    SELECT p.cloud_identity 
    FROM v$pdbs p;

    -- Get the ADB ARN for the trust relationship. Add this value and the one above
    -- to the Trusted entity for the IAM role
    SELECT param_value 
    FROM CLOUD_INTEGRATIONS 
    WHERE param_name = 'aws_user_arn';

    -- Create the credential used in calls to Amazon S3
    BEGIN
    DBMS_CLOUD.CREATE_CREDENTIAL(
            credential_name => 'adb_amazon_arn',
            params =>
                JSON_OBJECT(
                'aws_role_arn'     value 'arn:aws:iam::224561137164:role/adb-object-store-access',
                'external_id_type' value 'compartment_ocid'
                )
    );
    END;
    /


    -- Query the marketing bucket!
    -- (or your bucket ;) )
    SELECT * 
    FROM DBMS_CLOUD.LIST_OBJECTS('ADB_AMAZON_ARN', 'https://marketing-moviestream.s3.amazonaws.com/');

    </copy>
    ```
</details>

## Load data from local files
[](youtube:wp5ytZnVnIc)


## Load JSON collections

## REST endpoints

## Streams


