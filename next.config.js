const withNextIntl = require('next-intl/plugin')(
    'src/i18n/index.ts'
);

module.exports = withNextIntl({});