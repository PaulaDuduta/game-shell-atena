let initialized = false;

const clientId =
  '241892779108-ja197t6d16a8esio3i5sqnbsattpv4cn.apps.googleusercontent.com';

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
