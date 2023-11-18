import { StackContext, Table, Bucket } from "sst/constructs"
// Create an S3 bucket

export function StorageStack({ stack }: StackContext) {
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  })

  const bucket = new Bucket(stack, "Uploads")

  return {
    table,
    bucket,
  }
}
