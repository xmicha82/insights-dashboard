import './PageLoading.scss';

import React from 'react';
import {
    EmptyState,
    EmptyStateHeader,
    EmptyStateIcon,
    Spinner
} from '@patternfly/react-core';

const PageLoading = () => <EmptyState>
    <EmptyStateHeader titleText="Loading" headingLevel='h4' icon={<EmptyStateIcon icon={Spinner} />}/>
</EmptyState>;

export default PageLoading;
