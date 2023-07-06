import { LoadingButton } from "@mui/lab";
import { Box, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Container from "../components/common/Container";
import uiConfigs from "../configs/ui.configs";
import { useState } from "react";
import userApi from "../api/modules/user.api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/features/userSlice";
import { setAuthModalOpen } from "../redux/features/authModalSlice";

const PasswordUpdate = () => {
  const [onRequest, setOnRequest] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      confirmNewPassword: ""
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "password minimum 8 characters") // Yeu cau password >= 8 ki tu
        .required("password is required"), // Yeu cau nhap password
      newPassword: Yup.string()
        .min(8, "newPassword minimum 8 characters") // Yeu cau password >= 8 ki tu
        .required("newPassword is required"), // Yeu cau nhap password
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "confirmNewPassword not match") // Password khong chinh xac
        .min(8, "confirmNewPassword minimum 8 characters") // Yeu cau password >= 8 ki tu 
        .required("confirmNewPassword is required")
    }), // Tao password moi
    onSubmit: async values => onUpdate(values)
  });

  const onUpdate = async (values) => {
    if (onRequest) return;
    setOnRequest(true);

    const { response, err } = await userApi.passwordUpdate(values);

    setOnRequest(false);

    if (err) toast.error(err.message);
    if (response) {
      form.resetForm();
      navigate("/");
      dispatch(setUser(null));
      dispatch(setAuthModalOpen(true));
      toast.success("Update password success! Please re-login"); // Thong bao cap nhat password thanh cong
    }
  };

  return (
    <Box sx={{ ...uiConfigs.style.mainContent }}>
      <Container header="Cập nhật mật khẩu">
        <Box component="form" maxWidth="400px" onSubmit={form.handleSubmit}>
          <Stack spacing={2}>
            <TextField
              type="password"
              placeholder="password"
              name="password"
              fullWidth
              value={form.values.password}
              onChange={form.handleChange}
              color="success"
              error={form.touched.password && form.errors.password !== undefined}
              helperText={form.touched.password && form.errors.password}
            />
            <TextField
              type="password"
              placeholder="new password"
              name="newPassword"
              fullWidth
              value={form.values.newPassword}
              onChange={form.handleChange}
              color="success"
              error={form.touched.newPassword && form.errors.newPassword !== undefined}
              helperText={form.touched.newPassword && form.errors.newPassword}
            />
            <TextField
              type="password"
              placeholder="confirm new password"
              name="confirmNewPassword"
              fullWidth
              value={form.values.confirmNewPassword}
              onChange={form.handleChange}
              color="success"
              error={form.touched.confirmNewPassword && form.errors.confirmNewPassword !== undefined}
              helperText={form.touched.confirmNewPassword && form.errors.confirmNewPassword}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 4 }}
              loading={onRequest}
            >
              Đổi mật khẩu
            </LoadingButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );// button cap nhat password
};

export default PasswordUpdate;