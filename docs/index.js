/* Toggle the from dropdown */
$(".from-dropdown-toggle").click(function () {
  $(".from-custom-dropdown").toggleClass("hidden");
  $(".from-dropdown-toggle").toggleClass("button-collapsed");
});

/* Toggle the to dropdown */
$(".to-dropdown-toggle").click(function () {
  $(".to-custom-dropdown").toggleClass("hidden");
  $(".to-dropdown-toggle").toggleClass("button-collapsed");
});

/*Toggle revenue streams*/

$(".revenue-streams-content-toggle").click(function () {
  $(".revenue-streams-content").toggleClass(
    "revenue-streams-content-collapsed"
  );
  $(".revenue-streams-content-toggle").toggleClass("button-collapsed");
});

/*Toggle Products*/

$(".products-content-toggle").click(function () {
  $(".products-content").toggleClass("products-content-collapsed");
  $(".products-content-toggle").toggleClass("button-collapsed");
});

/*Toggle subscriptions*/

$(".subscriptions-content-toggle").click(function () {
  $(".subscriptions-content").toggleClass("subscriptions-content-collapsed");
  $(".subscriptions-content-toggle").toggleClass("button-collapsed");
});

/*Toggle customers*/

$(".customers-content-toggle").click(function () {
  $(".customers-content").toggleClass("customers-content-collapsed");
  $(".customers-content-toggle").toggleClass("button-collapsed");
});

/*Toggle cogs*/

$(".cogs-content-toggle").click(function () {
  $(".cogs-content").toggleClass("cogs-content-collapsed");
  $(".cogs-content-toggle").toggleClass("button-collapsed");
});

/*Toggle ebidta*/

$(".ebidta-content-toggle").click(function () {
  $(".ebidta-content").toggleClass("ebidta-content-collapsed");
  $(".ebidta-content-toggle").toggleClass("button-collapsed");
});

/*Toggle operations*/

$(".operations-content-toggle").click(function () {
  $(".operations-content").toggleClass("operations-content-collapsed");
  $(".operations-content-toggle").toggleClass("button-collapsed");
});

/* Toggle revenue table */

$(".revenue-inner-table-toggle").click(function () {
  $(".revenue-inner-table").toggleClass("revenue-inner-table-collapsed");
  $(".revenue-inner-table-toggle").toggleClass("button-collapsed");
});

$(".revenue-products-toggle").click(function () {
  $(".revenue-products-table").toggleClass("revenue-products-table-collapsed");
  $(".revenue-products-toggle").toggleClass("button-collapsed");
});

$(".revenue-subscriptions-toggle").click(function () {
  $(".revenue-subscriptions-table").toggleClass(
    "revenue-subscriptions-table-collapsed"
  );
  $(".revenue-subscriptions-toggle").toggleClass("button-collapsed");
});

function emailIsValide(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
$("#full_name").on("change", (e) => {
  if (e.target.value == "" || e.target.value.trim().length < 3) {
    $("#full_name_error").css("display", "block");
    $("#full_name").addClass("input-error");
  } else {
    $("#full_name_error").css("display", "none");
    $("#full_name").removeClass("input-error");
  }
});
$("#email").on("change", (e) => {
  if (
    e.target.value == "" ||
    e.target.value.trim().length < 3 ||
    !emailIsValide(e.target.value.trim())
  ) {
    $("#email_error").css("display", "block");
    $("#email").addClass("input-error");
  } else {
    $("#email_error").css("display", "none");
    $("#email").removeClass("input-error");
  }
});
$("#subject").on("change", (e) => {
  if (e.target.value == "" || e.target.value.trim().length < 3) {
    $("#subject_error").css("display", "block");
    $("#subject").addClass("input-error");
  } else {
    $("#subject_error").css("display", "none");
    $("#subject").removeClass("input-error");
  }
});
$("#body").on("change", (e) => {
  if (e.target.value == "" || e.target.value.trim().length < 3) {
    $("#body_error").css("display", "block");
    $("#body").addClass("input-error");
  } else {
    $("#body_error").css("display", "none");
    $("#body").removeClass("input-error");
  }
});

const sendEmail = () => {
  const full_name = $("#full_name").val();
  const email = $("#email").val();
  const subject = $("#subject").val();
  const body = $("#body").val();
  if (
    full_name != "" &&
    full_name.trim().length >= 3 &&
    email != "" &&
    email.trim().length >= 3 &&
    emailIsValide(email.trim()) &&
    subject != "" &&
    subject.trim().length >= 3 &&
    body != "" &&
    body.trim().length >= 3
  ) {
    var uri = "mailto:contact@dz-web.net?subject=";
    uri += encodeURIComponent(subject);
    uri += "&body=Je suis " + encodeURIComponent(full_name) + " \r\n\r\n "+encodeURIComponent(body);
    window.open(uri);
  }
};
