module.exports = {
    HID: {
        PING: 0x01,
        MSG: 0x03,
        LOCK: 0x04,
        INIT: 0x06,
        WINK: 0x08,
        CBOR: 0x10,
        CANCEL: 0x11,
        ERROR: 0x3f,
        KEEPALIVE: 0x3b,

        SOLO_BOOT: 0x50,
        SOLO_ENTERBOOT: 0x51,
        SOLO_ENTERSTBOOT: 0x52,
        SOLO_GETRNG: 0x60,
        SOLO_GETVERSION: 0x61,
        SOLO_LOADKEY: 0x62,
    },

    CTAP2: {
        GET_INFO: 0x04,
        MAKE_CREDENTIAL: 0x01,
        GET_ASSERTION: 0x02,
        GET_NEXT_ASSERTION: 0x08,
        CLIENT_PIN: 0x06,
        RESET: 0x07,
    },

    CTAP1: {

    },

    ERROR: {
        CTAP1_ERR_SUCCESS:0x00,
        CTAP1_ERR_INVALID_COMMAND: 0x01,
        CTAP1_ERR_INVALID_PARAMETER: 0x02,
        CTAP1_ERR_INVALID_LENGTH: 0x03,
        CTAP1_ERR_INVALID_SEQ: 0x04,
        CTAP1_ERR_TIMEOUT: 0x05,
        CTAP1_ERR_CHANNEL_BUSY: 0x06,
        CTAP1_ERR_LOCK_REQUIRED: 0x0A,
        CTAP1_ERR_INVALID_CHANNEL: 0x0B,
        CTAP2_ERR_CBOR_PARSING: 0x10,
        CTAP2_ERR_CBOR_UNEXPECTED_TYPE: 0x11,
        CTAP2_ERR_INVALID_CBOR: 0x12,
        CTAP2_ERR_INVALID_CBOR_TYPE: 0x13,
        CTAP2_ERR_MISSING_PARAMETER: 0x14,
        CTAP2_ERR_LIMIT_EXCEEDED: 0x15,
        CTAP2_ERR_UNSUPPORTED_EXTENSION: 0x16,
        CTAP2_ERR_TOO_MANY_ELEMENTS: 0x17,
        CTAP2_ERR_EXTENSION_NOT_SUPPORTED: 0x18,
        CTAP2_ERR_CREDENTIAL_EXCLUDED: 0x19,
        CTAP2_ERR_CREDENTIAL_NOT_VALID: 0x20,
        CTAP2_ERR_PROCESSING: 0x21,
        CTAP2_ERR_INVALID_CREDENTIAL: 0x22,
        CTAP2_ERR_USER_ACTION_PENDING: 0x23,
        CTAP2_ERR_OPERATION_PENDING: 0x24,
        CTAP2_ERR_NO_OPERATIONS: 0x25,
        CTAP2_ERR_UNSUPPORTED_ALGORITHM: 0x26,
        CTAP2_ERR_OPERATION_DENIED: 0x27,
        CTAP2_ERR_KEY_STORE_FULL: 0x28,
        CTAP2_ERR_NOT_BUSY: 0x29,
        CTAP2_ERR_NO_OPERATION_PENDING: 0x2A,
        CTAP2_ERR_UNSUPPORTED_OPTION: 0x2B,
        CTAP2_ERR_INVALID_OPTION: 0x2C,
        CTAP2_ERR_KEEPALIVE_CANCEL: 0x2D,
        CTAP2_ERR_NO_CREDENTIALS: 0x2E,
        CTAP2_ERR_USER_ACTION_TIMEOUT: 0x2F,
        CTAP2_ERR_NOT_ALLOWED: 0x30,
        CTAP2_ERR_PIN_INVALID: 0x31,
        CTAP2_ERR_PIN_BLOCKED: 0x32,
        CTAP2_ERR_PIN_AUTH_INVALID: 0x33,
        CTAP2_ERR_PIN_AUTH_BLOCKED: 0x34,
        CTAP2_ERR_PIN_NOT_SET: 0x35,
        CTAP2_ERR_PIN_REQUIRED: 0x36,
        CTAP2_ERR_PIN_POLICY_VIOLATION: 0x37,
        CTAP2_ERR_PIN_TOKEN_EXPIRED: 0x38,
        CTAP2_ERR_REQUEST_TOO_LARGE: 0x39,
        CTAP2_ERR_ACTION_TIMEOUT: 0x3A,
        CTAP1_ERR_OTHER: 0x7F,
        CTAP2_ERR_SPEC_LAST: 0xDF,
        CTAP2_ERR_EXTENSION_FIRST: 0xE0,
        CTAP2_ERR_EXTENSION_LAST: 0xEF,
        CTAP2_ERR_VENDOR_FIRST: 0xF0,
        CTAP2_ERR_VENDOR_LAST: 0xFF, 
    }
}