import React, { memo } from 'react';
import { CoreApp } from '@grafana/data';
import { LokiQueryEditorProps } from './types';
import { LokiQueryEditor } from './LokiQueryEditor';
import { LokiQueryEditorForAlerting } from './LokiQueryEditorForAlerting';
import { LokiQueryEditorSelector } from '../querybuilder/components/LokiQueryEditorSelector';
import { config } from '@grafana/runtime';

export function LokiQueryEditorByApp(props: LokiQueryEditorProps) {
  const { app } = props;

  switch (app) {
    case CoreApp.CloudAlerting:
      return <LokiQueryEditorForAlerting {...props} />;
    default:
      if (config.featureToggles.lokiQueryBuilder) {
        return <LokiQueryEditorSelector {...props} />;
      }
      return <LokiQueryEditor {...props} />;
  }
}

export default memo(LokiQueryEditorByApp);
