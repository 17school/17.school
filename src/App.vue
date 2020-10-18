<template>
  <div id="app" class="h-full">
    <div
      v-if="modalVisible"
      class="absolute w-full h-full left-0 top-0 z-10 flex justify-center items-center"
      style="background: rgba(0, 0, 0, 0.8)"
      @click="modalVisible=false"
    >
      <div class="clipped bg-gray-100 text-black font-light p-6 m-6 max-w-sm">
        <p>
          Thanks for signing up. We’ll reach out as soon as we start putting
          together the next batch.
        </p>
        <p class="mt-4">Have you checked out our <a href="./blog" class="underline">./blog</a> yet?</p>
      </div>
    </div>


    <div
      class="m-auto w-full h-full flex flex-col justify-between md:justify-center p-6 md:max-w-lg"
    >
      <form ref="form" class="flex flex-col items-center" @submit.prevent="submitForm" name="signups" netlify>
        <input type="hidden" name="form-name" value="signups">

        <div>
          <img alt="17.school logo" src="./assets/17.svg" class="w-16 m-10" />
        </div>

        <p>
          We'll turn you into a developer in 6 months. Pay us nothing till
          you're hired.
        </p>

        <div class="w-full mt-12">
          <input
            name="email"
            type="email"
            placeholder="elon@spacex.com"
            class="w-full placeholder-gray-100 gradient font-light pt-3 pb-3 pl-6 rounded-none border-0 outline-none"
          />
        </div>

        <div class="w-full mt-4">
          <select
            name="country"
            class="w-full gradient font-light pt-3 pb-3 pl-6 rounded-none border-0 outline-none"
          >
            <option value="BH">Bahrain</option>
            <option value="KW">Kuwait</option>
            <option value="OM">Oman</option>
            <option value="QA">Qatar</option>
            <option value="SA">Saudi Arabia</option>
            <option value="AE">United Arab Emirates</option>

            <optgroup label="Others">
              <option value="AF">Afghanistan</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas (the)</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia (Plurinational State of)</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory (the)</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="CV">Cabo Verde</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="KY">Cayman Islands (the)</option>
              <option value="CF">Central African Republic (the)</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands (the)</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros (the)</option>
              <option value="CD">Congo (the Democratic Republic of the)</option>
              <option value="CG">Congo (the)</option>
              <option value="CK">Cook Islands (the)</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curaçao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czechia</option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic (the)</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="SZ">Eswatini</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (the) [Malvinas]</option>
              <option value="FO">Faroe Islands (the)</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories (the)</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia (the)</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (the)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran (Islamic Republic of)</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea (the Democratic People's Republic of)</option>
              <option value="KR">Korea (the Republic of)</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic (the)</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands (the)</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia (Federated States of)</option>
              <option value="MD">Moldova (the Republic of)</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands (the)</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger (the)</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands (the)</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestine, State of</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines (the)</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="MK">Republic of North Macedonia</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation (the)</option>
              <option value="RW">Rwanda</option>
              <option value="RE">Réunion</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten (Dutch part)</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan (the)</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan (Province of China)</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands (the)</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates (the)</option>
              <option value="GB">United Kingdom of Great Britain and Northern Ireland (the)</option>
              <option value="UM">United States Minor Outlying Islands (the)</option>
              <option value="US">United States of America (the)</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela (Bolivarian Republic of)</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands (British)</option>
              <option value="VI">Virgin Islands (U.S.)</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
              <option value="AX">Åland Islands</option>
            </optgroup>
          </select>
        </div>

        <input
          type="submit"
          value="Sign me up"
          class="clipped mt-4 w-full bg-gray-100 rounded-none border-0 uppercase pt-3 pb-3 text-black cursor-pointer"
        />
      </form>

      <div class="md:mt-20 flex flex-col">
        <!-- <a href="/faq">./faq</a> -->
        <div><a href="/blog">./blog</a> <span class="text-gray-100">(soon)</span></div>
        <a href="mailto:hello@17.school">./contact-us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modalVisible: false,
    };
  },
  components: {},
  methods: {
    submitForm: function() {
       const vm = this
       const form = this.$refs.form
       const params = new URLSearchParams(new FormData(form)).toString()

       fetch(form.action, {
         method: 'POST', 
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: params
       }).then(data => {
         console.log(data)
         vm.modalVisible = true
       })
    }
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(90.95deg, #333333 0%, #1a1a1a 99.48%);
}
.clipped {
  clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%);
}
</style>
