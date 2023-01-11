import { ExtensionContext } from 'vscode';

/**
 * This method is called by VS Code when the extension is activated.
 */
export const activate = (context: ExtensionContext) => {
    console.log('The ARA VS Code extension is now active.');
};

/**
 * This method is called by VS Code when the extension is deactivated.
 */
export const deactivate = () => {
    console.log('The ARA VS Code extension is now inactive.');
};
