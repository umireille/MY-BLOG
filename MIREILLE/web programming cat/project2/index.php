<?php 
include('./server/config/conn.php');
include('./server/insert.php')
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Two</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        .container {
            width: 70%;
            margin: 0 auto;
            padding: 1rem 4rem;
        }

        h1 {
            text-align: center;
            margin-bottom: 2rem;
        }

        label {
            text-transform: uppercase;
            margin-right: 4rem;
            width: 30%;
        }

        span {
            text-transform: uppercase;
        }

        .form {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .form__input {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .form__input input[type=text],
        textarea {
            width: 50%;
            padding: 6px 12px;
            margin: 8px 0;
        }

        .form__input input[type=radio],
        input[type=checkbox] {
            margin: 8px 1rem;
        }

        .qualification {
            margin: 8px 0;
        }

        .btn-form {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;
        }

        .btn {
            border: none;
            outline: none;
            padding: 5px 12px;
            display: inline-block;
            border-radius: .5rem;
            margin: 0 1rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>STUDENT REGISTRATION FORM</h1>
        <form action="<?php echo (htmlspecialchars($_SERVER['PHP_SELF'])); ?>" method="post" class="form">
            <div class="form__input">
                <label for="firstName">first name</label>
                <input type="text" name="firstName">
            </div>
            <div class="form__input">
                <label for="lastName">last name</label>
                <input type="text" name="lastName">
            </div>
            <div class="form__input">
                <label for="lastName">Date of birth</label>
                <select name="day" id="day">
                    <option value="Day">Day</option>
                </select>
                <select name="month" id="month">
                    <option value="Month">Month</option>
                </select>
                <select name="year" id="year">
                    <option value="Year">Year</option>
                </select>
            </div>
            <div class="form__input">
                <label for="gender">email id</label>
                <input type="text" name="email">
            </div>
            <div class="form__input">
                <label for="gender">mobile number</label>
                <input type="text" name="mobileNumber">
            </div>
            <div class="form__input">
                <label for="gender">gender</label>
                <span>male</span><input type="radio" name="gender" value="male">
                <span>Female</span><input type="radio" name="gender" value="female">
            </div>
            <div class="form__input">
                <label for="address">address</label>
                <textarea name="address" cols="30" rows="3"></textarea>
            </div>
            <div class="form__input">
                <label for="city">city</label>
                <input type="text" name="city">
            </div>
            <div class="form__input">
                <label for="pin code">pin code</label>
                <input type="text" name="pinCode">
            </div>
            <div class="form__input">
                <label for="state">state</label>
                <input type="text" name="state">
            </div>
            <div class="form__input">
                <label for="country">country</label>
                <select name="country">
                    <option value="Rwanda">Rwanda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Kenya">Kenya</option>
                </select>
            </div>
            <div class="form__input">
                <label for="hobbies">hobbies</label>
                <span>drawing</span><input type="checkbox" name="drawing" value="drawing">
                <span>singing</span><input type="checkbox" name="singing" value="singing">
                <span>dancing</span><input type="checkbox" name="dancing" value="dancing">
                <span>sketching</span><input type="checkbox" name="sketching" value="sketching">
                <br>
                <span>other</span><input type="checkbox" name="other" value="other">
                <input type="text" name="other">
            </div>
            <div class="qualification">
                <label for="qualfication">qualification</label>
                <table>
                    <tr>
                        <th>SINo.</th>
                        <th>Examination</th>
                        <th>Board</th>
                        <th>percentage</th>
                        <th>Year of passing</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Class X</td>
                        <td><input type="text" name="board"></td>
                        <td><input type="text" name="percentage"></td>
                        <td><input type="text" name="passingYear"></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Class XII</td>
                        <td><input type="text" name="board"></td>
                        <td><input type="text" name="percentage"></td>
                        <td><input type="text" name="passingYear"></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Graduation</td>
                        <td><input type="text" name="board"></td>
                        <td><input type="text" name="percentage"></td>
                        <td><input type="text" name="passingYear"></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Masters</td>
                        <td>
                            <input type="text" name="board">
                            <br>
                            <span>(10 char max)</span>
                        </td>
                        <td>
                            <input type="text" name="percentage">
                            <br>
                            <span>(upto 2 decimal)</span>
                        </td>
                        <td>
                            <input type="text" name="passingYear">
                            <br>
                            <span style="visibility: hidden;">lorem</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <label for="Courses applied for">Courses applied for</label>
                <span>BCA</span><input type="radio" name="courses" value=" BCA">
                <span>B.com</span><input type="radio" name="courses" value=" B.com">
                <span>B.Sc</span><input type="radio" name="courses" value=" B.Sc">
                <span>B.A</span><input type="radio" name="courses" value=" B.A">
            </div>
            <div class="btn-form">
                <button type="submit" class="btn">Submit</button>
                <button type="reset" class="btn">Reset</button>
            </div>
        </form>
    </div>
    <script>
        // Creating date
        const day = document.getElementById('day');
        for (let i = 1; i <= 31; i++) {
            let option = document.createElement('option')
            option.value = i;
            option.textContent = i
            day.appendChild(option)
        }
        // Creating Month
        const month = document.getElementById('month');
        for (let i = 1; i <= 12; i++) {
            let option = document.createElement('option')
            option.value = i;
            option.textContent = i
            month.appendChild(option)
        }
        // Creating year
        const year = document.getElementById('year');
        for (let i = 1902; i <= 2023; i++) {
            let option = document.createElement('option')
            option.value = i;
            option.textContent = i
            year.appendChild(option)
        }
    </script>
</body>

</html>