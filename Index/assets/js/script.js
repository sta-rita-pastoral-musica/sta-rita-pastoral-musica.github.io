(() => {

    const drawer = document.getElementById("drawer");

    document.querySelectorAll('[data-drawer="open"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.add("opened");
            }
        })

    })

    document.querySelectorAll('[data-drawer="close"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.remove("opened");
            }
        })

    })

    document.querySelectorAll('[data-drawer="toggle"]').forEach((item) => {

        item.addEventListener('click', () => {
            if (drawer) {
                drawer.classList.toggle("opened");
            }
        })

    })

})()

