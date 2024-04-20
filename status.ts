// HTTP status codes as registered with IANA.
// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

export const enum HttpStatus {
  /** RFC9110, Section 15.2.1 */
  Continue = 100,
  ContinueText = "Continue",
  /** RFC9110, Section 15.2.1 */
  SwitchingProtocols = 101,
  SwitchingProtocolsText = "Switching Protocols",
  /** RFC2518 */
  Processing = 102,
  ProcessingText = "Processing",
  /** RFC8297 */
  EarlyHints = 103,
  EarlyHintsText = "Early Hints",
  // 104-199 Unassigned

  /** RFC9110, Section 15.3.1 */
  OK = 200,
  OKText = "OK",
  /** RFC9110, Section 15.3.2 */
  Created = 201,
  CreatedText = "Created",
  /** RFC9110, Section 15.3.3 */
  Accepted = 202,
  AcceptedText = "Accepted",
  /** RFC9110, Section 15.3.4 */
  NonAuthoritativeInfo = 203,
  NonAuthoritativeInfoText = "Non-Authoritative Information",
  /** RFC9110, Section 15.3.5 */
  NoContent = 204,
  NoContentText = "No Content",
  /** RFC9110, Section 15.3.6 */
  ResetContent = 205,
  ResetContentText = "Reset Content",
  /** RFC9110, Section 15.3.7 */
  PartialContent = 206,
  PartialContentText = "Partial Content",
  /** RFC4918 */
  MultiStatus = 207,
  MultiStatusText = "Multi-Status",
  /** RFC5842 */
  AlreadyReported = 208,
  AlreadyReportedText = "Already Reported",
  // 209-225 Unassigned
  /** RFC3229 */
  IMUsed = 226,
  IMUsedText = "IM Used",
  // 227-299 Unassigned

  /** RFC9110, Section 15.4.1 */
  MultipleChoices = 300,
  MultipleChoicesText = "Multiple Choices",
  /** RFC9110, Section 15.4.2 */
  MovedPermanently = 301,
  MovedPermanentlyText = "Moved Permanently",
  /** RFC9110, Section 15.4.3 */
  Found = 302,
  FoundText = "Found",
  /** RFC9110, Section 15.4.4 */
  SeeOther = 303,
  SeeOtherText = "See Other",
  /** RFC9110, Section 15.4.5 */
  NotModified = 304,
  NotModifiedText = "Not Modified",
  /** RFC9110, Section 15.4.6 */
  UseProxy = 305,
  UseProxyText = "Use Proxy",
  /** (Unused) RFC9110, Section 15.4.7 */
  _ = 306,
  /** RFC9110, Section 15.4.8 */
  TemporaryRedirect = 307,
  TemporaryRedirectText = "Temporary Redirect",
  /** RFC9110, Section 15.4.9 */
  PermanentRedirect = 308,
  PermanentRedirectText = "Permanent Redirect",
  // 309-399 Unassigned

  /** RFC9110, Section 15.5.1 */
  BadRequest = 400,
  BadRequestText = "Bad Request",
  /** RFC9110, Section 15.5.2 */
  Unauthorized = 401,
  UnauthorizedText = "Unauthorized",
  /** RFC9110, Section 15.5.3 */
  PaymentRequired = 402,
  PaymentRequiredText = "Payment Required",
  /** RFC9110, Section 15.5.4 */
  Forbidden = 403,
  ForbiddenText = "Forbidden",
  /** RFC9110, Section 15.5.5 */
  NotFound = 404,
  NotFoundText = "Not Found",
  /** RFC9110, Section 15.5.6 */
  MethodNotAllowed = 405,
  MethodNotAllowedText = "Method Not Allowed",
  /** RFC9110, Section 15.5.7 */
  NotAcceptable = 406,
  NotAcceptableText = "Not Acceptable",
  /** RFC9110, Section 15.5.8 */
  ProxyAuthRequired = 407,
  ProxyAuthRequiredText = "Proxy Authentication Required",
  /** RFC9110, Section 15.5.9 */
  RequestTimeout = 408,
  RequestTimeoutText = "Request Timeout",
  /** RFC9110, Section 15.5.10 */
  Conflict = 409,
  ConflictText = "Conflict",
  /** RFC9110, Section 15.5.11 */
  Gone = 410,
  GoneText = "Gone",
  /** RFC9110, Section 15.5.12 */
  LengthRequired = 411,
  LengthRequiredText = "Length Required",
  /** RFC9110, Section 15.5.13 */
  PreconditionFailed = 412,
  PreconditionFailedText = "Precondition Failed",
  /** RFC9110, Section 15.5.14 */
  RequestEntityTooLarge = 413,
  RequestEntityTooLargeText = "Request Entity Too Large",
  /** RFC9110, Section 15.5.15 */
  RequestURITooLong = 414,
  RequestURITooLongText = "Request-URI Too Long",
  /** RFC9110, Section 15.5.16 */
  UnsupportedMediaType = 415,
  UnsupportedMediaTypeText = "Unsupported Media Type",
  /** RFC9110, Section 15.5.17 */
  RequestedRangeNotSatisfiable = 416,
  RequestedRangeNotSatisfiableText = "Requested Range Not Satisfiable",
  /** RFC9110, Section 15.5.18 */
  ExpectationFailed = 417,
  ExpectationFailedText = "Expectation Failed",
  /** (Unused) RFC9110, Section 15.5.19 */
  Teapot = 418,
  TeapotText = "I'm a teapot",
  // 419-420 Unassigned
  /** RFC9110, Section 15.5.20 */
  MisdirectedRequest = 421,
  MisdirectedRequestText = "Misdirected Request",
  /** RFC9110, Section 15.5.21 */
  UnprocessableEntity = 422,
  UnprocessableEntityText = "Unprocessable Entity",
  /** RFC4918 */
  Locked = 423,
  LockedText = "Locked",
  /** RFC4918 */
  FailedDependency = 424,
  FailedDependencyText = "Failed Dependency",
  /** RFC8470 */
  TooEarly = 425,
  TooEarlyText = "Too Early",
  /** RFC9110, Section 15.5.22 */
  UpgradeRequired = 426,
  UpgradeRequiredText = "Upgrade Required",
  // 427 Unassigned
  /** RFC6585 */
  PreconditionRequired = 428,
  PreconditionRequiredText = "Precondition Required",
  /** RFC6585 */
  TooManyRequests = 429,
  TooManyRequestsText = "Too Many Requests",
  // 430 Unassigned
  /** RFC6585 */
  RequestHeaderFieldsTooLarge = 431,
  RequestHeaderFieldsTooLargeText = "Request Header Fields Too Large",
  // 432-450 Unassigned
  /** RFC7725 */
  UnavailableForLegalReasons = 451,
  UnavailableForLegalReasonsText = "Unavailable For Legal Reasons",
  // 452-499 Unassigned

  /** RFC9110, Section 15.6.1 */
  InternalServerError = 500,
  InternalServerErrorText = "Internal Server Error",
  /** RFC9110, Section 15.6.2 */
  NotImplemented = 501,
  NotImplementedText = "Not Implemented",
  /** RFC9110, Section 15.6.3 */
  BadGateway = 502,
  BadGatewayText = "Bad Gateway",
  /** RFC9110, Section 15.6.4 */
  ServiceUnavailable = 503,
  ServiceUnavailableText = "Service Unavailable",
  /** RFC9110, Section 15.6.5 */
  GatewayTimeout = 504,
  GatewayTimeoutText = "Gateway Timeout",
  /** RFC9110, Section 15.6.6 */
  HTTPVersionNotSupported = 505,
  HTTPVersionNotSupportedText = "HTTP Version Not Supported",
  /** RFC2295 */
  VariantAlsoNegotiates = 506,
  VariantAlsoNegotiatesText = "Variant Also Negotiates",
  /** RFC4918 */
  InsufficientStorage = 507,
  InsufficientStorageText = "Insufficient Storage",
  /** RFC5842 */
  LoopDetected = 508,
  LoopDetectedText = "Loop Detected",
  // 509 Unassigned
  /** (OBSOLETED) RFC2774 */
  NotExtended = 510,
  NotExtendedText = "Not Extended",
  /** RFC6585 */
  NetworkAuthenticationRequired = 511,
  NetworkAuthenticationRequiredText = "Network Authentication Required",
  // 512-599 Unassigned
}
