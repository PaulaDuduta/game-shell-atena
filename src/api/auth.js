let initialized = false;

const clientId =
  '241892779108-sh1evl170r8j570hiah5def4fcvm9mth.apps.googleusercontent.com';
export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          console.log(response);
        },

        scope: 'email profile',
      });

      resolve();
      initialized = true;
    });
  });
};
