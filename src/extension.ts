'use strict';

import * as vscode from 'vscode';

import { LanguageClient, LanguageClientOptions } from 'vscode-languageclient';

export async function activate(context: vscode.ExtensionContext) {
    const conf = vscode.workspace.getConfiguration("graphql-lsc");
    let [command, ...args] = (<[string]>conf.get("commandWithArgs"));
    const clientOptions: LanguageClientOptions = {
        documentSelector: ['graphql'],
    };
    const disposable = new LanguageClient('Language Server GraphQL', {command, args, options: {cwd: vscode.workspace.rootPath}}, clientOptions).start();

    context.subscriptions.push(disposable);
}
