document.querySelector("#show-success-alert").addEventListener("click",function(){
    Swal.fire({
        title: "Success",
        text: "Success message!",
        icon: "success",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        showCancelButton: false,
    });
});
document.querySelector("#show-error-alert").addEventListener("click",function(){
    Swal.fire({
        title: "Error",
        text: "Error message!",
        icon: "error",
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        showCancelButton: false,
    });
});