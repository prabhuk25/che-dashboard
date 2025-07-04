/*
 * Copyright (c) 2018-2024 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const selectState = (state: RootState) => state.clusterInfo;

export const selectApplications = createSelector(
  selectState,
  state => state.clusterInfo.applications || [],
);

export const selectClusterInfoError = createSelector(selectState, state => state.error);
export const selectCurrentArchitecture = createSelector(selectState, state => state.clusterInfo.currentArchitecture);
