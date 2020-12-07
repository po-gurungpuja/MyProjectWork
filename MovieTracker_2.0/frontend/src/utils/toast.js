import iziToast from 'izitoast';

iziToast.settings({
    timeout: 6000,
    progressBarColor: 'green',
    transitionIn: "flipInX",
    progressBarEasing: 'linear'
})

export const success = ({ title , message }) => {
    iziToast.success({
        title,
        message,
        
    });
};

export const error = ({ title , message }) => {
    iziToast.error({
        title,
        message,   
    });
};