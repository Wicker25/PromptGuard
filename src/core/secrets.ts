// Auto-generated — do not edit manually
// Source: https://github.com/gitleaks/gitleaks
// prettier-ignore
export const SECRET_PATTERNS = [
  {
    name: '1password-secret-key',
    pattern: `\\bA3-[A-Z0-9]{6}-(?:(?:[A-Z0-9]{11})|(?:[A-Z0-9]{6}-[A-Z0-9]{5}))-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}\\b`,
    flags: '',
  },
  {
    name: '1password-service-account-token',
    pattern: `ops_eyJ[a-zA-Z0-9+/]{250,}={0,3}`,
    flags: '',
  },
  {
    name: 'adafruit-api-key',
    pattern: `[\\w.-]{0,50}?(?:adafruit)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9_-]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'adobe-client-id',
    pattern: `[\\w.-]{0,50}?(?:adobe)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'adobe-client-secret',
    pattern: `\\b(p8e-(?i)[a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'age-secret-key',
    pattern: `AGE-SECRET-KEY-1[QPZRY9X8GF2TVDW0S3JN54KHCE6MUA7L]{58}`,
    flags: '',
  },
  {
    name: 'airtable-api-key',
    pattern: `[\\w.-]{0,50}?(?:airtable)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{17})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'airtable-personnal-access-token',
    pattern: `\\b(pat[[:alnum:]]{14}\\.[a-f0-9]{64})\\b`,
    flags: '',
  },
  {
    name: 'algolia-api-key',
    pattern: `[\\w.-]{0,50}?(?:algolia)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'alibaba-access-key-id',
    pattern: `\\b(LTAI(?i)[a-z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'alibaba-secret-key',
    pattern: `[\\w.-]{0,50}?(?:alibaba)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{30})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'anthropic-admin-api-key',
    pattern: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'anthropic-api-key',
    pattern: `\\b(sk-ant-api03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'artifactory-api-key',
    pattern: `\\bAKCp[A-Za-z0-9]{69}\\b`,
    flags: '',
  },
  {
    name: 'artifactory-reference-token',
    pattern: `\\bcmVmd[A-Za-z0-9]{59}\\b`,
    flags: '',
  },
  {
    name: 'asana-client-id',
    pattern: `[\\w.-]{0,50}?(?:asana)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'asana-client-secret',
    pattern: `[\\w.-]{0,50}?(?:asana)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'atlassian-api-token',
    pattern: `[\\w.-]{0,50}?(?:(?-i:ATLASSIAN|[Aa]tlassian)|(?-i:CONFLUENCE|[Cc]onfluence)|(?-i:JIRA|[Jj]ira))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{20}[a-f0-9]{4})(?:[\\x60'"\\s;]|\\\\[nr]|$)|\\b(ATATT3[A-Za-z0-9_\\-=]{186})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'authress-service-client-access-key',
    pattern: `\\b((?:sc|ext|scauth|authress)_(?i)[a-z0-9]{5,30}\\.[a-z0-9]{4,6}\\.(?-i:acc)[_-][a-z0-9-]{10,32}\\.[a-z0-9+/_=-]{30,120})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'aws-access-token',
    pattern: `\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b`,
    flags: '',
  },
  {
    name: 'aws-amazon-bedrock-api-key-long-lived',
    pattern: `\\b(ABSK[A-Za-z0-9+/]{109,269}={0,2})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'aws-amazon-bedrock-api-key-short-lived',
    pattern: `bedrock-api-key-YmVkcm9jay5hbWF6b25hd3MuY29t`,
    flags: '',
  },
  {
    name: 'azure-ad-client-secret',
    pattern: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
    flags: '',
  },
  {
    name: 'beamer-api-token',
    pattern: `[\\w.-]{0,50}?(?:beamer)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(b_[a-z0-9=_\\-]{44})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'bitbucket-client-id',
    pattern: `[\\w.-]{0,50}?(?:bitbucket)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'bitbucket-client-secret',
    pattern: `[\\w.-]{0,50}?(?:bitbucket)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'bittrex-access-key',
    pattern: `[\\w.-]{0,50}?(?:bittrex)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'bittrex-secret-key',
    pattern: `[\\w.-]{0,50}?(?:bittrex)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'cisco-meraki-api-key',
    pattern: `[\\w.-]{0,50}?(?:[\\w.-]{0,50}?(?:(?-i:[Mm]eraki|MERAKI))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3})(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'clickhouse-cloud-api-secret-key',
    pattern: `\\b(4b1d[A-Za-z0-9]{38})\\b`,
    flags: '',
  },
  {
    name: 'clojars-api-token',
    pattern: `CLOJARS_[a-z0-9]{60}`,
    flags: 'i',
  },
  {
    name: 'cloudflare-api-key',
    pattern: `[\\w.-]{0,50}?(?:cloudflare)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9_-]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'cloudflare-global-api-key',
    pattern: `[\\w.-]{0,50}?(?:cloudflare)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{37})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'cloudflare-origin-ca-key',
    pattern: `\\b(v1\\.0-[a-f0-9]{24}-[a-f0-9]{146})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'codecov-access-token',
    pattern: `[\\w.-]{0,50}?(?:codecov)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'cohere-api-token',
    pattern: `[\\w.-]{0,50}?(?:[\\w.-]{0,50}?(?:cohere|CO_API_KEY)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3})(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-zA-Z0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'coinbase-access-token',
    pattern: `[\\w.-]{0,50}?(?:coinbase)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9_-]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'confluent-access-token',
    pattern: `[\\w.-]{0,50}?(?:confluent)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'confluent-secret-key',
    pattern: `[\\w.-]{0,50}?(?:confluent)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'contentful-delivery-api-token',
    pattern: `[\\w.-]{0,50}?(?:contentful)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{43})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'curl-auth-header',
    pattern: `\\bcurl\\b(?:.*?|.*?(?:[\\r\\n]{1,2}.*?){1,5})[ \\t\\n\\r](?:-H|--header)(?:=|[ \\t]{0,5})(?:"(?i)(?:Authorization:[ \\t]{0,5}(?:Basic[ \\t]([a-z0-9+/]{8,}={0,3})|(?:Bearer|(?:Api-)?Token)[ \\t]([\\w=~@.+/-]{8,})|([\\w=~@.+/-]{8,}))|(?:(?:X-(?:[a-z]+-)?)?(?:Api-?)?(?:Key|Token)):[ \\t]{0,5}([\\w=~@.+/-]{8,}))"|'(?i)(?:Authorization:[ \\t]{0,5}(?:Basic[ \\t]([a-z0-9+/]{8,}={0,3})|(?:Bearer|(?:Api-)?Token)[ \\t]([\\w=~@.+/-]{8,})|([\\w=~@.+/-]{8,}))|(?:(?:X-(?:[a-z]+-)?)?(?:Api-?)?(?:Key|Token)):[ \\t]{0,5}([\\w=~@.+/-]{8,}))')(?:\\B|\\s|\\z)`,
    flags: '',
  },
  {
    name: 'curl-auth-user',
    pattern: `\\bcurl\\b(?:.*|.*(?:[\\r\\n]{1,2}.*){1,5})[ \\t\\n\\r](?:-u|--user)(?:=|[ \\t]{0,5})("(:[^"]{3,}|[^:"]{3,}:|[^:"]{3,}:[^"]{3,})"|'([^:']{3,}:[^']{3,})'|((?:"[^"]{3,}"|'[^']{3,}'|[\\w$@.-]+):(?:"[^"]{3,}"|'[^']{3,}'|[\\w\${}@.-]+)))(?:\\s|\\z)`,
    flags: '',
  },
  {
    name: 'databricks-api-token',
    pattern: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'datadog-access-token',
    pattern: `[\\w.-]{0,50}?(?:datadog)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'defined-networking-api-token',
    pattern: `[\\w.-]{0,50}?(?:dnkey)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(dnkey-[a-z0-9=_\\-]{26}-[a-z0-9=_\\-]{52})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'digitalocean-access-token',
    pattern: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'digitalocean-pat',
    pattern: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'digitalocean-refresh-token',
    pattern: `\\b(dor_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'discord-api-token',
    pattern: `[\\w.-]{0,50}?(?:discord)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'discord-client-id',
    pattern: `[\\w.-]{0,50}?(?:discord)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9]{18})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'discord-client-secret',
    pattern: `[\\w.-]{0,50}?(?:discord)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'doppler-api-token',
    pattern: `dp\\.pt\\.(?i)[a-z0-9]{43}`,
    flags: '',
  },
  {
    name: 'droneci-access-token',
    pattern: `[\\w.-]{0,50}?(?:droneci)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'dropbox-api-token',
    pattern: `[\\w.-]{0,50}?(?:dropbox)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{15})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'dropbox-long-lived-api-token',
    pattern: `[\\w.-]{0,50}?(?:dropbox)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{11}(AAAAAAAAAA)[a-z0-9\\-_=]{43})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'dropbox-short-lived-api-token',
    pattern: `[\\w.-]{0,50}?(?:dropbox)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(sl\\.[a-z0-9\\-=_]{135})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'duffel-api-token',
    pattern: `duffel_(?:test|live)_(?i)[a-z0-9_\\-=]{43}`,
    flags: '',
  },
  {
    name: 'dynatrace-api-token',
    pattern: `dt0c01\\.(?i)[a-z0-9]{24}\\.[a-z0-9]{64}`,
    flags: '',
  },
  {
    name: 'easypost-api-token',
    pattern: `\\bEZAK(?i)[a-z0-9]{54}\\b`,
    flags: '',
  },
  {
    name: 'easypost-test-api-token',
    pattern: `\\bEZTK(?i)[a-z0-9]{54}\\b`,
    flags: '',
  },
  {
    name: 'etsy-access-token',
    pattern: `[\\w.-]{0,50}?(?:(?-i:ETSY|[Ee]tsy))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{24})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'facebook-access-token',
    pattern: `\\b(\\d{15,16}(\\||%)[0-9a-z\\-_]{27,40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'facebook-page-access-token',
    pattern: `\\b(EAA[MC](?i)[a-z0-9]{100,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'facebook-secret',
    pattern: `[\\w.-]{0,50}?(?:facebook)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'fastly-api-token',
    pattern: `[\\w.-]{0,50}?(?:fastly)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'finicity-api-token',
    pattern: `[\\w.-]{0,50}?(?:finicity)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'finicity-client-secret',
    pattern: `[\\w.-]{0,50}?(?:finicity)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'finnhub-access-token',
    pattern: `[\\w.-]{0,50}?(?:finnhub)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'flickr-access-token',
    pattern: `[\\w.-]{0,50}?(?:flickr)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'flutterwave-encryption-key',
    pattern: `FLWSECK_TEST-(?i)[a-h0-9]{12}`,
    flags: '',
  },
  {
    name: 'flutterwave-public-key',
    pattern: `FLWPUBK_TEST-(?i)[a-h0-9]{32}-X`,
    flags: '',
  },
  {
    name: 'flutterwave-secret-key',
    pattern: `FLWSECK_TEST-(?i)[a-h0-9]{32}-X`,
    flags: '',
  },
  {
    name: 'flyio-access-token',
    pattern: `\\b((?:fo1_[\\w-]{43}|fm1[ar]_[a-zA-Z0-9+\\/]{100,}={0,3}|fm2_[a-zA-Z0-9+\\/]{100,}={0,3}))(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'frameio-api-token',
    pattern: `fio-u-(?i)[a-z0-9\\-_=]{64}`,
    flags: '',
  },
  {
    name: 'freemius-secret-key',
    pattern: `["']secret_key["']\\s*=>\\s*["'](sk_[\\S]{29})["']`,
    flags: 'i',
  },
  {
    name: 'freshbooks-access-token',
    pattern: `[\\w.-]{0,50}?(?:freshbooks)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'gcp-api-key',
    pattern: `\\b(AIza[\\w-]{35})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'generic-api-key',
    pattern: `[\\w.-]{0,50}?(?:access|auth|(?-i:[Aa]pi|API)|credential|creds|key|passw(?:or)?d|secret|token)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([\\w.=-]{10,150}|[a-z0-9][a-z0-9+/]{11,}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'github-app-token',
    pattern: `(?:ghu|ghs)_[0-9a-zA-Z]{36}`,
    flags: '',
  },
  {
    name: 'github-fine-grained-pat',
    pattern: `github_pat_\\w{82}`,
    flags: '',
  },
  {
    name: 'github-oauth',
    pattern: `gho_[0-9a-zA-Z]{36}`,
    flags: '',
  },
  {
    name: 'github-pat',
    pattern: `ghp_[0-9a-zA-Z]{36}`,
    flags: '',
  },
  {
    name: 'github-refresh-token',
    pattern: `ghr_[0-9a-zA-Z]{36}`,
    flags: '',
  },
  {
    name: 'gitlab-cicd-job-token',
    pattern: `glcbt-[0-9a-zA-Z]{1,5}_[0-9a-zA-Z_-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-deploy-token',
    pattern: `gldt-[0-9a-zA-Z_\\-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-feature-flag-client-token',
    pattern: `glffct-[0-9a-zA-Z_\\-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-feed-token',
    pattern: `glft-[0-9a-zA-Z_\\-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-incoming-mail-token',
    pattern: `glimt-[0-9a-zA-Z_\\-]{25}`,
    flags: '',
  },
  {
    name: 'gitlab-kubernetes-agent-token',
    pattern: `glagent-[0-9a-zA-Z_\\-]{50}`,
    flags: '',
  },
  {
    name: 'gitlab-oauth-app-secret',
    pattern: `gloas-[0-9a-zA-Z_\\-]{64}`,
    flags: '',
  },
  {
    name: 'gitlab-pat',
    pattern: `glpat-[\\w-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-pat-routable',
    pattern: `\\bglpat-[0-9a-zA-Z_-]{27,300}\\.[0-9a-z]{2}[0-9a-z]{7}\\b`,
    flags: '',
  },
  {
    name: 'gitlab-ptt',
    pattern: `glptt-[0-9a-f]{40}`,
    flags: '',
  },
  {
    name: 'gitlab-rrt',
    pattern: `GR1348941[\\w-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-runner-authentication-token',
    pattern: `glrt-[0-9a-zA-Z_\\-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-runner-authentication-token-routable',
    pattern: `\\bglrt-t\\d_[0-9a-zA-Z_\\-]{27,300}\\.[0-9a-z]{2}[0-9a-z]{7}\\b`,
    flags: '',
  },
  {
    name: 'gitlab-scim-token',
    pattern: `glsoat-[0-9a-zA-Z_\\-]{20}`,
    flags: '',
  },
  {
    name: 'gitlab-session-cookie',
    pattern: `_gitlab_session=[0-9a-z]{32}`,
    flags: '',
  },
  {
    name: 'gitter-access-token',
    pattern: `[\\w.-]{0,50}?(?:gitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9_-]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'gocardless-api-token',
    pattern: `[\\w.-]{0,50}?(?:gocardless)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(live_(?i)[a-z0-9\\-_=]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'grafana-api-key',
    pattern: `\\b(eyJrIjoi[A-Za-z0-9]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'grafana-cloud-api-token',
    pattern: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'grafana-service-account-token',
    pattern: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'harness-api-key',
    pattern: `(?:pat|sat)\\.[a-zA-Z0-9_-]{22}\\.[a-zA-Z0-9]{24}\\.[a-zA-Z0-9]{20}`,
    flags: '',
  },
  {
    name: 'hashicorp-tf-api-token',
    pattern: `[a-z0-9]{14}\\.(?-i:atlasv1)\\.[a-z0-9\\-_=]{60,70}`,
    flags: 'i',
  },
  {
    name: 'hashicorp-tf-password',
    pattern: `[\\w.-]{0,50}?(?:administrator_login_password|password)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}("[a-z0-9=_\\-]{8,20}")(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'heroku-api-key',
    pattern: `[\\w.-]{0,50}?(?:heroku)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'heroku-api-key-v2',
    pattern: `\\b((HRKU-AA[0-9a-zA-Z_-]{58}))(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'hubspot-api-key',
    pattern: `[\\w.-]{0,50}?(?:hubspot)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'huggingface-access-token',
    pattern: `\\b(hf_(?:[a-z]{34}))(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'huggingface-organization-api-token',
    pattern: `\\b(api_org_(?:[a-z]{34}))(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'infracost-api-token',
    pattern: `\\b(ico-[a-zA-Z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'intercom-api-key',
    pattern: `[\\w.-]{0,50}?(?:intercom)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{60})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'intra42-client-secret',
    pattern: `\\b(s-s4t2(?:ud|af)-(?i)[abcdef0123456789]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'jfrog-api-key',
    pattern: `[\\w.-]{0,50}?(?:jfrog|artifactory|bintray|xray)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{73})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'jfrog-identity-token',
    pattern: `[\\w.-]{0,50}?(?:jfrog|artifactory|bintray|xray)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'jwt',
    pattern: `\\b(ey[a-zA-Z0-9]{17,}\\.ey[a-zA-Z0-9\\/\\\\_-]{17,}\\.(?:[a-zA-Z0-9\\/\\\\_-]{10,}={0,2})?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'jwt-base64',
    pattern: `\\bZXlK(?:(?<alg>aGJHY2lPaU)|(?<apu>aGNIVWlPaU)|(?<apv>aGNIWWlPaU)|(?<aud>aGRXUWlPaU)|(?<b64>aU5qUWlP)|(?<crit>amNtbDBJanBi)|(?<cty>amRIa2lPaU)|(?<epk>bGNHc2lPbn)|(?<enc>bGJtTWlPaU)|(?<jku>cWEzVWlPaU)|(?<jwk>cWQyc2lPb)|(?<iss>cGMzTWlPaU)|(?<iv>cGRpSTZJ)|(?<kid>cmFXUWlP)|(?<key_ops>clpYbGZiM0J6SWpwY)|(?<kty>cmRIa2lPaUp)|(?<nonce>dWIyNWpaU0k2)|(?<p2c>d01tTWlP)|(?<p2s>d01uTWlPaU)|(?<ppt>d2NIUWlPaU)|(?<sub>emRXSWlPaU)|(?<svt>emRuUWlP)|(?<tag>MFlXY2lPaU)|(?<typ>MGVYQWlPaUp)|(?<url>MWNtd2l)|(?<use>MWMyVWlPaUp)|(?<ver>MlpYSWlPaU)|(?<version>MlpYSnphVzl1SWpv)|(?<x>NElqb2)|(?<x5c>NE5XTWlP)|(?<x5t>NE5YUWlPaU)|(?<x5ts256>NE5YUWpVekkxTmlJNkl)|(?<x5u>NE5YVWlPaU)|(?<zip>NmFYQWlPaU))[a-zA-Z0-9\\/\\\\_+\\-\\r\\n]{40,}={0,2}`,
    flags: '',
  },
  {
    name: 'kraken-access-token',
    pattern: `[\\w.-]{0,50}?(?:kraken)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9\\/=_\\+\\-]{80,90})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'kubernetes-secret-yaml',
    pattern: `(?:\\bkind:[ \\t]*["']?\\bsecret\\b["']?(?s:.){0,200}?\\bdata:(?s:.){0,100}?\\s+([\\w.-]+:(?:[ \\t]*(?:\\||>[-+]?)\\s+)?[ \\t]*(?:["']?[a-z0-9+/]{10,}={0,3}["']?|\\{\\{[ \\t\\w"|$:=,.-]+}}|""|''))|\\bdata:(?s:.){0,100}?\\s+([\\w.-]+:(?:[ \\t]*(?:\\||>[-+]?)\\s+)?[ \\t]*(?:["']?[a-z0-9+/]{10,}={0,3}["']?|\\{\\{[ \\t\\w"|$:=,.-]+}}|""|''))(?s:.){0,200}?\\bkind:[ \\t]*["']?\\bsecret\\b["']?)`,
    flags: 'i',
  },
  {
    name: 'kucoin-access-token',
    pattern: `[\\w.-]{0,50}?(?:kucoin)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{24})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'kucoin-secret-key',
    pattern: `[\\w.-]{0,50}?(?:kucoin)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'launchdarkly-access-token',
    pattern: `[\\w.-]{0,50}?(?:launchdarkly)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'linear-api-key',
    pattern: `lin_api_(?i)[a-z0-9]{40}`,
    flags: '',
  },
  {
    name: 'linear-client-secret',
    pattern: `[\\w.-]{0,50}?(?:linear)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'linkedin-client-id',
    pattern: `[\\w.-]{0,50}?(?:linked[_-]?in)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{14})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'linkedin-client-secret',
    pattern: `[\\w.-]{0,50}?(?:linked[_-]?in)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'lob-api-key',
    pattern: `[\\w.-]{0,50}?(?:lob)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}((live|test)_[a-f0-9]{35})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'lob-pub-api-key',
    pattern: `[\\w.-]{0,50}?(?:lob)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}((test|live)_pub_[a-f0-9]{31})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'looker-client-id',
    pattern: `[\\w.-]{0,50}?(?:looker)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'looker-client-secret',
    pattern: `[\\w.-]{0,50}?(?:looker)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{24})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mailchimp-api-key',
    pattern: `[\\w.-]{0,50}?(?:MailchimpSDK.initialize|mailchimp)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{32}-us\\d\\d)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mailgun-private-api-token',
    pattern: `[\\w.-]{0,50}?(?:mailgun)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(key-[a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mailgun-pub-key',
    pattern: `[\\w.-]{0,50}?(?:mailgun)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(pubkey-[a-f0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mailgun-signing-key',
    pattern: `[\\w.-]{0,50}?(?:mailgun)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-h0-9]{32}-[a-h0-9]{8}-[a-h0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mapbox-api-token',
    pattern: `[\\w.-]{0,50}?(?:mapbox)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(pk\\.[a-z0-9]{60}\\.[a-z0-9]{22})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'mattermost-access-token',
    pattern: `[\\w.-]{0,50}?(?:mattermost)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{26})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'maxmind-license-key',
    pattern: `\\b([A-Za-z0-9]{6}_[A-Za-z0-9]{29}_mmk)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'messagebird-api-token',
    pattern: `[\\w.-]{0,50}?(?:message[_-]?bird)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{25})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'messagebird-client-id',
    pattern: `[\\w.-]{0,50}?(?:message[_-]?bird)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'microsoft-teams-webhook',
    pattern: `https://[a-z0-9]+\\.webhook\\.office\\.com/webhookb2/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}@[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/IncomingWebhook/[a-z0-9]{32}/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}`,
    flags: '',
  },
  {
    name: 'netlify-access-token',
    pattern: `[\\w.-]{0,50}?(?:netlify)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{40,46})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'new-relic-browser-api-token',
    pattern: `[\\w.-]{0,50}?(?:new-relic|newrelic|new_relic)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(NRJS-[a-f0-9]{19})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'new-relic-insert-key',
    pattern: `[\\w.-]{0,50}?(?:new-relic|newrelic|new_relic)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(NRII-[a-z0-9-]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'new-relic-user-api-id',
    pattern: `[\\w.-]{0,50}?(?:new-relic|newrelic|new_relic)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'new-relic-user-api-key',
    pattern: `[\\w.-]{0,50}?(?:new-relic|newrelic|new_relic)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(NRAK-[a-z0-9]{27})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'notion-api-token',
    pattern: `\\b(ntn_[0-9]{11}[A-Za-z0-9]{32}[A-Za-z0-9]{3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'npm-access-token',
    pattern: `\\b(npm_[a-z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'nuget-config-password',
    pattern: `<add key=\\"(?:(?:ClearText)?Password)\\"\\s*value=\\"(.{8,})\\"\\s*/>`,
    flags: 'i',
  },
  {
    name: 'nytimes-access-token',
    pattern: `[\\w.-]{0,50}?(?:nytimes|new-york-times,|newyorktimes)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9=_\\-]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'octopus-deploy-api-key',
    pattern: `\\b(API-[A-Z0-9]{26})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'okta-access-token',
    pattern: `[\\w.-]{0,50}?(?:[\\w.-]{0,50}?(?:(?-i:[Oo]kta|OKTA))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3})(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(00[\\w=\\-]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'openai-api-key',
    pattern: `\\b(sk-(?:proj|svcacct|admin)-(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})T3BlbkFJ(?:[A-Za-z0-9_-]{74}|[A-Za-z0-9_-]{58})\\b|sk-[a-zA-Z0-9]{20}T3BlbkFJ[a-zA-Z0-9]{20})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'openshift-user-token',
    pattern: `\\b(sha256~[\\w-]{43})(?:[^\\w-]|\\z)`,
    flags: '',
  },
  {
    name: 'perplexity-api-key',
    pattern: `\\b(pplx-[a-zA-Z0-9]{48})(?:[\\x60'"\\s;]|\\\\[nr]|$|\\b)`,
    flags: '',
  },
  {
    name: 'plaid-api-token',
    pattern: `[\\w.-]{0,50}?(?:plaid)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(access-(?:sandbox|development|production)-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'plaid-client-id',
    pattern: `[\\w.-]{0,50}?(?:plaid)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{24})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'plaid-secret-key',
    pattern: `[\\w.-]{0,50}?(?:plaid)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{30})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'planetscale-api-token',
    pattern: `\\b(pscale_tkn_(?i)[\\w=\\.-]{32,64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'planetscale-oauth-token',
    pattern: `\\b(pscale_oauth_[\\w=\\.-]{32,64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'planetscale-password',
    pattern: `\\b(pscale_pw_(?i)[\\w=\\.-]{32,64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'postman-api-token',
    pattern: `\\b(PMAK-(?i)[a-f0-9]{24}\\-[a-f0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'prefect-api-token',
    pattern: `\\b(pnu_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'private-key',
    pattern: `-----BEGIN[ A-Z0-9_-]{0,100}PRIVATE KEY(?: BLOCK)?-----[\\s\\S-]{64,}?KEY(?: BLOCK)?-----`,
    flags: 'i',
  },
  {
    name: 'privateai-api-token',
    pattern: `[\\w.-]{0,50}?(?:[\\w.-]{0,50}?(?:private[_-]?ai)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3})(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{32})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'pulumi-api-token',
    pattern: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'pypi-upload-token',
    pattern: `pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}`,
    flags: '',
  },
  {
    name: 'rapidapi-access-token',
    pattern: `[\\w.-]{0,50}?(?:rapidapi)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9_-]{50})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'readme-api-token',
    pattern: `\\b(rdme_[a-z0-9]{70})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'rubygems-api-token',
    pattern: `\\b(rubygems_[a-f0-9]{48})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'scalingo-api-token',
    pattern: `\\b(tk-us-[\\w-]{48})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'sendbird-access-id',
    pattern: `[\\w.-]{0,50}?(?:sendbird)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sendbird-access-token',
    pattern: `[\\w.-]{0,50}?(?:sendbird)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sendgrid-api-token',
    pattern: `\\b(SG\\.(?i)[a-z0-9=_\\-\\.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'sendinblue-api-token',
    pattern: `\\b(xkeysib-[a-f0-9]{64}\\-(?i)[a-z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'sentry-access-token',
    pattern: `[\\w.-]{0,50}?(?:sentry)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sentry-org-token',
    pattern: `\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}(?:[^a-zA-Z0-9+/]|\\z)`,
    flags: '',
  },
  {
    name: 'sentry-user-token',
    pattern: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'settlemint-application-access-token',
    pattern: `\\b(sm_aat_[a-zA-Z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'settlemint-personal-access-token',
    pattern: `\\b(sm_pat_[a-zA-Z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'settlemint-service-access-token',
    pattern: `\\b(sm_sat_[a-zA-Z0-9]{16})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'shippo-api-token',
    pattern: `\\b(shippo_(?:live|test)_[a-fA-F0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'shopify-access-token',
    pattern: `shpat_[a-fA-F0-9]{32}`,
    flags: '',
  },
  {
    name: 'shopify-custom-access-token',
    pattern: `shpca_[a-fA-F0-9]{32}`,
    flags: '',
  },
  {
    name: 'shopify-private-app-access-token',
    pattern: `shppa_[a-fA-F0-9]{32}`,
    flags: '',
  },
  {
    name: 'shopify-shared-secret',
    pattern: `shpss_[a-fA-F0-9]{32}`,
    flags: '',
  },
  {
    name: 'sidekiq-secret',
    pattern: `[\\w.-]{0,50}?(?:BUNDLE_ENTERPRISE__CONTRIBSYS__COM|BUNDLE_GEMS__CONTRIBSYS__COM)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-f0-9]{8}:[a-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sidekiq-sensitive-url',
    pattern: `\\bhttps?://([a-f0-9]{8}:[a-f0-9]{8})@(?:gems.contribsys.com|enterprise.contribsys.com)(?:[\\/|\\#|\\?|:]|$)`,
    flags: 'i',
  },
  {
    name: 'slack-app-token',
    pattern: `xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+`,
    flags: 'i',
  },
  {
    name: 'slack-bot-token',
    pattern: `xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*`,
    flags: '',
  },
  {
    name: 'slack-config-access-token',
    pattern: `xoxe.xox[bp]-\\d-[A-Z0-9]{163,166}`,
    flags: 'i',
  },
  {
    name: 'slack-config-refresh-token',
    pattern: `xoxe-\\d-[A-Z0-9]{146}`,
    flags: 'i',
  },
  {
    name: 'slack-legacy-bot-token',
    pattern: `xoxb-[0-9]{8,14}-[a-zA-Z0-9]{18,26}`,
    flags: '',
  },
  {
    name: 'slack-legacy-token',
    pattern: `xox[os]-\\d+-\\d+-\\d+-[a-fA-F\\d]+`,
    flags: '',
  },
  {
    name: 'slack-legacy-workspace-token',
    pattern: `xox[ar]-(?:\\d-)?[0-9a-zA-Z]{8,48}`,
    flags: '',
  },
  {
    name: 'slack-user-token',
    pattern: `xox[pe](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}`,
    flags: '',
  },
  {
    name: 'slack-webhook-url',
    pattern: `(?:https?://)?hooks.slack.com/(?:services|workflows|triggers)/[A-Za-z0-9+/]{43,56}`,
    flags: '',
  },
  {
    name: 'snyk-api-token',
    pattern: `[\\w.-]{0,50}?(?:snyk[_.-]?(?:(?:api|oauth)[_.-]?)?(?:key|token))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sonar-api-token',
    pattern: `[\\w.-]{0,50}?(?:sonar[_.-]?(login|token))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}((?:squ_|sqp_|sqa_)?[a-z0-9=_\\-]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sourcegraph-access-token',
    pattern: `\\b(\\b(sgp_(?:[a-fA-F0-9]{16}|local)_[a-fA-F0-9]{40}|sgp_[a-fA-F0-9]{40}|[a-fA-F0-9]{40})\\b)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'square-access-token',
    pattern: `\\b((?:EAAA|sq0atp-)[\\w-]{22,60})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'squarespace-access-token',
    pattern: `[\\w.-]{0,50}?(?:squarespace)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'stripe-access-token',
    pattern: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'sumologic-access-id',
    pattern: `[\\w.-]{0,50}?(?:[\\w.-]{0,50}?(?:(?-i:[Ss]umo|SUMO))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3})(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(su[a-zA-Z0-9]{12})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'sumologic-access-token',
    pattern: `[\\w.-]{0,50}?(?:(?-i:[Ss]umo|SUMO))(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'telegram-bot-api-token',
    pattern: `[\\w.-]{0,50}?(?:telegr)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9]{5,16}:(?-i:A)[a-z0-9_\\-]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'travisci-access-token',
    pattern: `[\\w.-]{0,50}?(?:travis)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{22})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twilio-api-key',
    pattern: `SK[0-9a-fA-F]{32}`,
    flags: '',
  },
  {
    name: 'twitch-api-token',
    pattern: `[\\w.-]{0,50}?(?:twitch)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{30})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twitter-access-secret',
    pattern: `[\\w.-]{0,50}?(?:twitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{45})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twitter-access-token',
    pattern: `[\\w.-]{0,50}?(?:twitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([0-9]{15,25}-[a-zA-Z0-9]{20,40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twitter-api-key',
    pattern: `[\\w.-]{0,50}?(?:twitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{25})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twitter-api-secret',
    pattern: `[\\w.-]{0,50}?(?:twitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{50})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'twitter-bearer-token',
    pattern: `[\\w.-]{0,50}?(?:twitter)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(A{22}[a-zA-Z0-9%]{80,100})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'typeform-api-token',
    pattern: `[\\w.-]{0,50}?(?:typeform)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(tfp_[a-z0-9\\-_\\.=]{59})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'vault-batch-token',
    pattern: `\\b(hvb\\.[\\w-]{138,300})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: '',
  },
  {
    name: 'vault-service-token',
    pattern: `\\b((?:hvs\\.[\\w-]{90,120}|s\\.(?:[a-z0-9]{24})))(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'yandex-access-token',
    pattern: `[\\w.-]{0,50}?(?:yandex)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(t1\\.[A-Z0-9a-z_-]+[=]{0,2}\\.[A-Z0-9a-z_-]{86}[=]{0,2})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'yandex-api-key',
    pattern: `[\\w.-]{0,50}?(?:yandex)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(AQVN[A-Za-z0-9_\\-]{35,38})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'yandex-aws-access-token',
    pattern: `[\\w.-]{0,50}?(?:yandex)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}(YC[a-zA-Z0-9_\\-]{38})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
  {
    name: 'zendesk-secret-key',
    pattern: `[\\w.-]{0,50}?(?:zendesk)(?:[ \\t\\w.-]{0,20})[\\s'"]{0,3}(?:=|>|:{1,3}=|\\|\\||:|=>|\\?=|,)[\\x60'"\\s=]{0,5}([a-z0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    flags: 'i',
  },
];
