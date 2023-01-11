import { ExtensionContext } from 'vscode';

/**
 * This method is called by VS Code when the extension is activated.
 */
export const activate = (context: ExtensionContext) => {
    console.log('Ara highlighting extension is now active.');
};

/**
 * This method is called by VS Code when the extension is deactivated.
 */
export const deactivate = () => {
    console.log('Ara highlighting extension is now inactive.');
};
