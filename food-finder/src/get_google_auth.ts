import request from 'request-promise';

export default async function GetGoogleCredentials(
  receivingServiceURL: string
) {
  // Set up metadata server request
  // See https://cloud.google.com/compute/docs/instances/verifying-instance-identity#request_signature
  const metadataServerTokenURL =
    'http://metadata/computeMetadata/v1/instance/service-accounts/default/identity?audience=';
  const tokenRequestOptions = {
    uri: metadataServerTokenURL + receivingServiceURL,
    headers: {
      'Metadata-Flavor': 'Google',
    },
  };
  return request(tokenRequestOptions);
}
