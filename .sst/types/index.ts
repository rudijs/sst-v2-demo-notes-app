import "sst/node/config";
declare module "sst/node/config" {
  export interface ConfigTypes {
    APP: string;
    STAGE: string;
  }
}

import "sst/node/table";
declare module "sst/node/table" {
  export interface TableResources {
    "Notes": {
      tableName: string;
    }
  }
}

import "sst/node/bucket";
declare module "sst/node/bucket" {
  export interface BucketResources {
    "Uploads": {
      bucketName: string;
    }
  }
}

